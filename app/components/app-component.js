import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AppComponent extends Component {
  @tracked myProperty = false;
}
