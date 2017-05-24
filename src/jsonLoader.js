import xhr from 'xhr-request';
import Q from 'bluebird';
import { ASSETS_DIR,JSON_PATH } from './constants';
import { values,each } from 'lodash';

const L = (() => {

  function _findFilesRecursive(location, layerId) {
    let _files = []

    function __re(children) {
      return children.map(child => {
        if (child.type === 'folder') {
          if (child.children) {
            return __re(child.children)
          }
          return child
        } else if (child.name !== '.DS_Store') {
          let url = child.path.replace('../www-assets/', ASSETS_DIR)
            //let url = process.env.REMOTE_ASSETS_DIR + 'tour/' + location.name + '/' + child.path.substring(child.path.indexOf(layerId), child.path.length)
          child.url = url
          _files.push(child)
          return child
        }
      })
    }

    let _correctType = location.children.filter(folder => {
      return folder.name === layerId
    })

    if (location.name === 'transitions') {
      __re(location.children)
    } else {
      __re(_correctType)
    }

    let _fileGroups = []
    for (var i = 0; i < _files.length; i += 2) {
      _fileGroups.push([_files[i], _files[i + 1]])
    }

    return {
      id: location.name,
      files: _fileGroups
    }
  }

  function parseJsonToLocation(json, layerId) {
    //speaking, music
    let _locations = []
    each(json.children, location => {
      if (location.type === 'folder') {
        _locations.push(_findFilesRecursive(location, layerId))
      }
    })
    return _locations
  }

  let _vo = {
    speaking: {
      id: 'speaking',
      options: {
        sound: {
          fadeDownBeforeEnding: 0.4,
          howler: {
            volume: 1
          }
        }
      }
    },
    effects: {
      id: 'effects',
      options: {
        sound: {
          fadeDownBeforeEnding: 0.4,
          howler: {
            volume: 0.1
          }
        }
      }
    },
    music: {
      id: 'music',
      options: {
        sound: {
          fadeDownBeforeEnding: 0.4,
          howler: {
            volume: 0.07
          }
        }
      }
    }
  }

  function _load(path) {
    return new Q((yes, no) => {
      xhr(`${path}?z=${Math.random()}`, {
        json: true
      }, function(err, data) {
        if (err) {
          no(err)
        } else {
          yes(data)
        }
      })
    })
  }

  function _loadBody(path) {
    return _load(`${path}bodymovin.json`)
  }

  function _loadTour(path) {
    return _load(`${path}alhambra_data.json`)
      .then(d => {
        let _values = values(_vo)
        return _values.map(layer => {
          layer.locations = parseJsonToLocation(d, layer.id)
          return layer
        })
      });
  }

  function _loadSequence(path) {
    return _load(`${path}magipack_manifest.json`)
      .then(d => {
        return d.map(location => {
          location.images = `${ASSETS_DIR}${location.images}`
          location.pack = `${ASSETS_DIR}${location.pack}`
          return location
        })
      });
  }

  function loadTourData() {
    return Q.all([
      _loadTour(JSON_PATH),
      _loadBody(JSON_PATH),
      _loadSequence(JSON_PATH),
    ])
    .then(results=>{
      console.log(results);
      return results
    })
  }

  return {
    loadTourData: loadTourData
  }

})()

export default L
