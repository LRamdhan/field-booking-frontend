import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';

import 'filepond/dist/filepond.min.css';
import '@pqina/pintura/pintura.css';

import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor';

import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

import { create, registerPlugin } from 'filepond';

import {
  // Image editor
  openEditor,
  processImage,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,

  // Only needed if loading legacy image editor data
  legacyDataToImageState,

  // Import the editor default configuration
  getEditorDefaults,
} from '@pqina/pintura';

import { css } from '@emotion/react';
import useProfileStore from '../../store/profileStore';

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageEditor,
  FilePondPluginFilePoster
);

const UploadImg = () => {
  const setEditImg = useProfileStore(state => state.setEditImg)

  const textInput = useRef()

  const handleUpdateFile = files => {
    setEditImg(files[0].file)
  }

  // const handleUpload = async () => {
  //   await axios.patch('http://localhost:3000/api/users', {
  //     avatar: file
  //   }, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // }

  useEffect(() => {
    let pond = create(textInput.current, {
      labelIdle: `Drag and drop your image or Click to Browse`,
      imagePreviewHeight: 70,
      imageCropAspectRatio: '1:1',
      imageResizeTargetWidth: 70,
      imageResizeTargetHeight: 70,
      stylePanelLayout: 'compact circle',
      styleLoadIndicatorPosition: 'center bottom',
      styleProgressIndicatorPosition: 'right bottom',
      styleButtonRemoveItemPosition: 'left bottom',
      styleButtonProcessItemPosition: 'right bottom',

      allowMultiple: false,
      server: null,
      onupdatefiles: handleUpdateFile,
    
      // FilePond generic properties
      filePosterMaxHeight: 256,

      // FilePond Image Editor plugin properties
      imageEditor: {
          // Maps legacy data objects to new imageState objects (optional)
          legacyDataToImageState: legacyDataToImageState,

          // Used to create the editor (required)
          createEditor: openEditor,

          // Used for reading the image data. See JavaScript installation for details on the `imageReader` property (required)
          imageReader: [
              createDefaultImageReader,
              {
                  // createDefaultImageReader options here
              },
          ],

          // Required when generating a preview thumbnail and/or output image
          imageWriter: [
              createDefaultImageWriter,
              {
                  // We'll resize images to fit a 512 × 512 square
                  targetSize: {
                      width: 512,
                      height: 512,
                  },
              },
          ],

          // Used to create poster and output images, runs an invisible "headless" editor instance
          imageProcessor: processImage,

          // Pintura Image Editor options
          editorOptions: {
              // Pass the editor default configuration options
              ...getEditorDefaults(),

              // This will set a square crop aspect ratio
              imageCropAspectRatio: 1,
          },
        },
    });
  }, [])

  return (
    <div css={css`width: 73px; height: 73px;`}>
      <input type="text" ref={textInput} />
    </div>
  )
}

export default UploadImg