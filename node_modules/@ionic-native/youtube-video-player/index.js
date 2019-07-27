var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var YoutubeVideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayerOriginal, _super);
    function YoutubeVideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayerOriginal.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayerOriginal.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayerOriginal.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.platforms = ["Android", "iOS"];
    return YoutubeVideoPlayerOriginal;
}(IonicNativePlugin));
var YoutubeVideoPlayer = new YoutubeVideoPlayerOriginal();
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3lvdXR1YmUtdmlkZW8tcGxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtDaEMsc0NBQWlCOzs7O0lBT3ZELHNDQUFTLGFBQUMsT0FBZTs7Ozs7OzZCQTFDM0I7RUFtQ3dDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgWW91dHViZSBWaWRlbyBQbGF5ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogUGxheXMgWW91VHViZSB2aWRlb3MgaW4gTmF0aXZlIFlvdVR1YmUgQXBwXG4gKlxuICogQHVzYWdlXG4gKiBGb3IgQW5kcm9pZCA1LjArIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHRoZSBmb2xsb3dpbmcgdG8gY29uZmlnLnhtbFxuICogYGBgeG1sXG4gKiA8cHJlZmVyZW5jZSBuYW1lPVwiWW91VHViZURhdGFBcGlLZXlcIiB2YWx1ZT1cIltZT1VSIFlPVVRVQkUgQVBJXVwiIC8+XG4gKiBgYGBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2dldHRpbmctc3RhcnRlZFxuICpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBZb3V0dWJlVmlkZW9QbGF5ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3lvdXR1YmUtdmlkZW8tcGxheWVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB5b3V0dWJlOiBZb3V0dWJlVmlkZW9QbGF5ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnlvdXR1YmUub3BlblZpZGVvKCdteXZpZGVvaWQnKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdZb3V0dWJlVmlkZW9QbGF5ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi15b3V0dWJlLXZpZGVvLXBsYXllcicsXG4gIHBsdWdpblJlZjogJ1lvdXR1YmVWaWRlb1BsYXllcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWhhZGVlZC9Db3Jkb3ZhWW91dHViZVZpZGVvUGxheWVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWW91dHViZVZpZGVvUGxheWVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBQbGF5cyBhIFlvdVR1YmUgdmlkZW9cbiAgICogQHBhcmFtIHZpZGVvSWQge3N0cmluZ30gVmlkZW8gSURcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcGVuVmlkZW8odmlkZW9JZDogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxufVxuIl19