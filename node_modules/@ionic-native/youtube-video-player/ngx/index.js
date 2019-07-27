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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var YoutubeVideoPlayer = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayer.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayer.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayer.platforms = ["Android", "iOS"];
    YoutubeVideoPlayer = __decorate([
        Injectable()
    ], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}(IonicNativePlugin));
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3lvdXR1YmUtdmlkZW8tcGxheWVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWtDaEMsc0NBQWlCOzs7O0lBT3ZELHNDQUFTLGFBQUMsT0FBZTs7Ozs7O0lBUGQsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQjs2QkFuQy9CO0VBbUN3QyxpQkFBaUI7U0FBNUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4vKipcbiAqIEBuYW1lIFlvdXR1YmUgVmlkZW8gUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsYXlzIFlvdVR1YmUgdmlkZW9zIGluIE5hdGl2ZSBZb3VUdWJlIEFwcFxuICpcbiAqIEB1c2FnZVxuICogRm9yIEFuZHJvaWQgNS4wKyB5b3Ugd2lsbCBuZWVkIHRvIGFkZCB0aGUgZm9sbG93aW5nIHRvIGNvbmZpZy54bWxcbiAqIGBgYHhtbFxuICogPHByZWZlcmVuY2UgbmFtZT1cIllvdVR1YmVEYXRhQXBpS2V5XCIgdmFsdWU9XCJbWU9VUiBZT1VUVUJFIEFQSV1cIiAvPlxuICogYGBgXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9nZXR0aW5nLXN0YXJ0ZWRcbiAqXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgWW91dHViZVZpZGVvUGxheWVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS95b3V0dWJlLXZpZGVvLXBsYXllci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgeW91dHViZTogWW91dHViZVZpZGVvUGxheWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy55b3V0dWJlLm9wZW5WaWRlbygnbXl2aWRlb2lkJyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWW91dHViZVZpZGVvUGxheWVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teW91dHViZS12aWRlby1wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdZb3V0dWJlVmlkZW9QbGF5ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvQ29yZG92YVlvdXR1YmVWaWRlb1BsYXllcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVWaWRlb1BsYXllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogUGxheXMgYSBZb3VUdWJlIHZpZGVvXG4gICAqIEBwYXJhbSB2aWRlb0lkIHtzdHJpbmd9IFZpZGVvIElEXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb3BlblZpZGVvKHZpZGVvSWQ6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==