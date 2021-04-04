import { Button } from 'kintone-ui-component/lib/button';

(() => {
  'use strict';

  kintone.events.on('app.record.index.show', event => {
    const header = kintone.app.getHeaderMenuSpaceElement();

    const button = new Button({
      text: 'Submit',
      type: 'submit',
    });
    button.addEventListener('click', event => {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
