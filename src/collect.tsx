import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { domReady } from './util'
import CollectApp, { AppOptions } from './ui/collect/app'
import createXkit from '@xkit-co/xkit.js'

const renderCollect = function (id: string, opts: AppOptions): void {
  domReady(window.document, () => {
    const xkit = createXkit(window.location.host)
    ReactDOM.render(
      <CollectApp xkit={xkit} {...opts} />,
      document.getElementById(id)
    )
  })
}

// Global Augmentation: https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
declare global {
  interface Window {
    renderCollect: typeof renderCollect
  }
}

window.renderCollect = renderCollect
