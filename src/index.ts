import Vue from './components/Panel.vue';
import { PluginContext } from 'altair-graphql-core/build/plugin/context/context.interface';
import { AltairPanelLocation } from 'altair-graphql-core/build/plugin/panel';
import { PluginBase } from 'altair-graphql-core/build/plugin/base';
import Panel from './components/Panel.vue';

// https://altair.sirmuel.design/docs/plugins/writing-plugin.html
class AltairTracing extends PluginBase {
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

(window as any)['AltairGraphQL'].plugins['AltairTracing'] = AltairTracing;
