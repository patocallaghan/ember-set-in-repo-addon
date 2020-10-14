import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class InRepoComponent extends Component {
  @tracked myProperty = false;
}
