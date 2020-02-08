export function isFullScreen () {
  return !!(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen)
}

export function fullScreen(e) {
  const elem = document.documentElement || document.body
  const isFull = isFullScreen()
  if (!isFull) {
    (elem.requestFullscreen && elem.requestFullscreen()) || 
      (elem.mozRequestFullscreen && elem.mozRequestFullscreen()) ||
        (elem.webkitRequestFullscreen && elem.webkitRequestFullscreen()) ||
          (elem.msRequestFullscreen && elem.msRequestFullscreen())
  } else {
    (document.exitFullscreen && document.exitFullscreen()) ||
      (document.mozCancelFullScreen && document.mozCancelFullScreen()) ||
        (document.webkitExitFullscreen && document.webkitExitFullscreen())
  }
}
