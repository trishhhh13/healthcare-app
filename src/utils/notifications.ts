export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

export const showLocalNotification = async (title: string, body: string, url: string = '/') => {
  const hasPermission = await requestNotificationPermission();

  if (!hasPermission) {
    alert(`${title}\n\n${body}`);
    return;
  }

  try {
    const nativeNotif = new Notification(title, {
      body,
      icon: '/logo.png'
    });

    nativeNotif.onclick = () => {
      window.focus();
      if (url) window.location.href = url;
    };
  } catch (err) {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification(title, {
          body,
          icon: '/logo.png',
          badge: '/logo.png',
          data: url,
          tag: 'medcare-notif'
        });
      } catch (swErr) {
        alert(`${title}\n\n${body}`);
      }
    } else {
      alert(`${title}\n\n${body}`);
    }
  }
};
