export function urlType(url: string) {
  return function(target: any) {
    target.prototype.url = url;
    target.prototype.ss = url;
  }
}
