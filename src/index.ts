import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyter-theme-gv extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-theme-gv:plugin',
  description: 'A JupyterLab / Jupyter Notebook Theme.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyter-theme-gv is activated!');
    const style = 'jupyter-theme-gv/index.css';

    manager.register({
      name: 'jupyter-theme-gv',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
