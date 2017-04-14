import Component, { tracked } from "@glimmer/component";
import { onChange } from '../../../utils/router';

export default class GlimmerDemoUsingRouteRecognizer extends Component {
  @tracked protected currentRouteComponent: string;
  @tracked protected params: any;

  constructor(options) {
    super(options);

    onChange((componentName: string, params: any) => {
      this.currentRouteComponent = componentName;
      this.params = params;
    });
  }
}
