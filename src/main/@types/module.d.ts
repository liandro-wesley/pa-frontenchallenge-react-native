import {Routes} from './../navigation/routes';
declare global {
  namespace Modules {
    export {Routes};
  }
  namespace ReactNavigation {
    interface RootParamList {
      HOME: string;
      READ: string;
    }
  }
}
