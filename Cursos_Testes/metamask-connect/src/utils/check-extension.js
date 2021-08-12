export function checkExtension() {
  const Extension = {
    textBtn: '',
    link: '',
    status: false
  }

  if (window.ethereum) {
    Extension.textBtn = 'Conectar Wallet';
    Extension.status = true;
  } else {
    Extension.textBtn = 'Instalar Wallet';
    Extension.link = 'https://metamask.io/';
    Extension.status = false
  }

  return Extension;
}