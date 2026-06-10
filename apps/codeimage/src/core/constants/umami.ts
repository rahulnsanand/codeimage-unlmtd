declare global {
  interface Window {
    umami: Umami;
  }
}

const isDev = import.meta.env.DEV;

function getUmamiMock() {
  const umamiMock: Umami = {} as Umami;
  umamiMock.track = () => void 0;
  return umamiMock;
}

export function getUmami() {
  return window?.umami ?? getUmamiMock();
}
