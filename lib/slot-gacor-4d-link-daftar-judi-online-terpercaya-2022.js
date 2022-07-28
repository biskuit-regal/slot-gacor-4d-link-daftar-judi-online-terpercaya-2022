'use babel';

import SlotGacor4dLinkDaftarJudiOnlineTerpercaya2022View from './slot-gacor-4d-link-daftar-judi-online-terpercaya-2022-view';
import { CompositeDisposable } from 'atom';

export default {

  slotGacor4dLinkDaftarJudiOnlineTerpercaya2022View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotGacor4dLinkDaftarJudiOnlineTerpercaya2022View = new SlotGacor4dLinkDaftarJudiOnlineTerpercaya2022View(state.slotGacor4dLinkDaftarJudiOnlineTerpercaya2022ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotGacor4dLinkDaftarJudiOnlineTerpercaya2022View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-gacor-4d-link-daftar-judi-online-terpercaya-2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotGacor4dLinkDaftarJudiOnlineTerpercaya2022View.destroy();
  },

  serialize() {
    return {
      slotGacor4dLinkDaftarJudiOnlineTerpercaya2022ViewState: this.slotGacor4dLinkDaftarJudiOnlineTerpercaya2022View.serialize()
    };
  },

  toggle() {
    console.log('SlotGacor4dLinkDaftarJudiOnlineTerpercaya2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
