
export function swReg() {
  const sw_URI = `${process.env.PUBLIC_URL}/sw.js`;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(sw_URI)
      .then((res) => {
        console.log("Service Worker Registered Successfully", { res });
      })
      .catch((e) => {
        console.error({ e });
      })
  } else {
    console.log("Service Worker not Available")
  }
}