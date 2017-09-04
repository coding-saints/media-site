// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import Cosmic from 'cosmicjs'
// import PostCard from './PostCard'
// import './Blog.scss'

// // const urlCosmic = 
// //  `https://api.cosmicjs.com/v1/shopifymedia/object/another-test?pretty=true&hide_metafields=true`

// export default class Blog extends Component {
//  constructor(props) {
//      super(props);
//      this.state = {
//         slug: ''
//      }
    
//  }
//  componentDidMount() {
//      const config = {
//          bucket: {
//              slug: 'shopifymedia',
             
//          }
//      };

//      Cosmic.getObject(config, config.object, (err, res) => {
//          var object = res.object;
//          document.getElementById('title').innerHTML = object.title;
//          document.getElementById('content').innerHTML = object.content;
//          var metafields = object.metafields;
//          var items = '';
//          metafields.forEach(function (metafield) {
//              items += '<h2>' + metafield.title + '</h2>';
//              items += '<img width="300" src="' + metafield.url + '"/>';
//              items += '<br><br>';
//          });
//          document.getElementById('metafields').innerHTML = items;
//      });
//  }
//    render() {
//       // if(!this.state.cData) return <p>uh oh</p>
//        return(
//            <div id="title">
          
//            </div>
//        )
//    }
// }