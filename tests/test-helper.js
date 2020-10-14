import Application from 'ember-set-in-repo-addon/app';
import config from 'ember-set-in-repo-addon/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
