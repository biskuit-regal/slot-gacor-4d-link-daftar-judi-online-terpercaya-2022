'use babel';

export default class SlotGacor4dLinkDaftarJudiOnlineTerpercaya2022View {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('slot-gacor-4d-link-daftar-judi-online-terpercaya-2022');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The SlotGacor4dLinkDaftarJudiOnlineTerpercaya2022 package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
