import createXkitWithCatalog from './index'

function init(domain: string): void {
  Object.assign(this, createXkitWithCatalog(domain))
}

// Global Augmentation: https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
declare global {
  interface Window {
    xkit: {
      init: typeof init
    }
  }
}

window.xkit = {
  ...(window.xkit || {}),
  init
}
