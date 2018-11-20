// 用来关闭 angular 的开发者模式
import { enableProdMode } from '@angular/core';
// 告诉 angular 使用哪个模块来启动整个应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// 导入环境配置
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
