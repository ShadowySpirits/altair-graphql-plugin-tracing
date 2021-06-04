import { AltairPanelLocation, PluginClassInstance, PluginContext } from 'altair-exported-types/dist/app/modules/altair/services/plugin/plugin';
import { registerPluginClass } from 'altair-graphql-plugin';
import Vue from './components/Panel.vue';
import Panel from './components/Panel.vue';

// https://altair.sirmuel.design/docs/plugins/writing-plugin.html
class AltairTracing implements PluginClassInstance {
  initialize(ctx: PluginContext) {

    const div = document.createElement('div');

    const app = new Vue({
      el: '',
      template: '<Panel :context="context" />',
      components: { Panel },
      propsData: {
        context: ctx,
      }
    }).$mount();
    const panelComp = new Panel({
      propsData: {
        context: ctx,
      }
    }).$mount();

    ctx.app.createPanel(div, {
      location: AltairPanelLocation.RESULT_PANE_BOTTOM,
      title: 'Tracing',
    });

    // for some reason, specidying the div in $mount didnt work, so using DOM APIs instead
    div.appendChild(panelComp.$el);

  }

  destroy() {}
}

registerPluginClass('AltairTracing', AltairTracing);
