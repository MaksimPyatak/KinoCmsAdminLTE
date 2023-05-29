function saveNewData(arreyForUpload, collectionName, arrForDell, pathToSaveFile) {
   new Promise((resolve, reject))
   console.log(pathToSaveFile)
   let promises = []
   for (const item of arreyForUpload) {
      if (item.image) {
         //const { downloadUrl, metadata } =
         promises.push(
            uploadFile(item.image, pathToSaveFile)
               .then((response) => {
                  addDataToFirebase(
                     item.id,
                     collectionName,
                     'downloadUrl',
                     response.downloadUrl,
                     false
                  )
                  return response
               })
               .then((response) => {
                  addDataToFirebase(
                     item.id,
                     collectionName,
                     'fullPath',
                     response.metadata.fullPath,
                     true
                  )
               })
         )
      }
      for (const key in item) {
         if (Object.hasOwnProperty.call(item, key)) {
            if (key != 'image') {
               addDataToFirebase(item.id, collectionName, key, item[key], true)
            }
         }
      }
   }
   console.log(promises)
   arreyForUpload.splice(0, arreyForUpload.length)
   for (const item of arrForDell) {
      delCardInDoc(collectionName, item.nameColl, item.fullPath)
   }
   arrForDell.splice(0, arrForDell.length)
}
