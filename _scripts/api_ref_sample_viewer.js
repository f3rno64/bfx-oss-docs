/* global Zepto, _, debugBase */

(() => {
  const l = debugBase.extend('api-ref-sample-viewer')
  const selViewer = '.bfx-oss-docs-api-reference-sample-viewer'
  const selHeader = '.bfx-oss-docs-api-reference-sample-viewer__header'
  const selContent = '.bfx-oss-docs-api-reference-sample-viewer__content'

  Zepto(($) => {
    $(`${selHeader} li`).on('click', function (e) {
      const viewer = $(e.target).closest(selViewer)

      if (!viewer) {
        l('Error: parent viewer not found')
        return
      }

      const sampleSetID = viewer.data('sample-set-id')

      if (!_.isString(sampleSetID) || _.isEmpty(sampleSetID)) {
        l('Error: viewer has no sample set ID')
        return
      }

      const selOwnViewer = `${selViewer}[data-sample-set-id="${sampleSetID}"]`

      $(`${selOwnViewer} ${selHeader} li`).removeClass('active')
      $(`${selOwnViewer} ${selContent} li`).removeClass('active')

      const menuItem = e.target.nodeName === 'LI'
        ? $(e.target)
        : $(e.target).closest('li')

      if (!menuItem) {
        l('Error: parent <li> not found')
        return
      }

      menuItem.addClass('active')

      const sampleID = menuItem.data('sample-id')

      if (!_.isString(sampleID) || _.isEmpty(sampleID)) {
        l('Error: sample menu item has no ID')
        return
      }

      $(`${selOwnViewer} ${selContent} [data-sample-id="${sampleID}"]`)
        .addClass('active')
    })
  })
})()
