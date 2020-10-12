import React, { useEffect } from 'react';

import $ from 'jquery';
import io from 'socket.io-client';

function Host() {
    document.title = 'Live-Stream Host';

    var canvas = document.getElementById('preview');
    var context = canvas.getContext('2d');

    canvas.width = 680;
    canvas.height = 510;

    context.width = canvas.width;
    context.height = canvas.height;

    var video = document.getElementById('video');

    var socket = io();

    function logger(msg) {
      $('#logger').text(msg);
    }

    function loadCam(stream) {
      // video.srcObject = mediaStream;
      video.srcObject = stream;
      logger('camera loaded correctly [OK]');
    }

    function loadFail() {
      logger('Camera not found, check the camera');
    }

    function viewVideo(video, context) {
      context.drawImage(video, 0, 0, context.width, context.height);
      //to transmit images as a string, webp is a format similar to png
      socket.emit('stream', canvas.toDataURL('image/png'));
    }

    $(function () {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msgGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, loadCam, loadFail);
      }
      setInterval(function () {
        viewVideo(video, context);
      }, 120);
    });
  

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <video src="" id="video" style={{ width: '680px' }} autoplay="true"></video>

      <canvas style={{ display: 'none' }} id="preview"></canvas>

      <div id="logger"></div>
    </>
  );
} 

export default Host;