import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // 只能传入指令、组件和管道
  declarations: [
    AppComponent
  ],
  // 其它需要的模块
  imports: [
    BrowserModule
  ],
  providers: [],
  // 主程序
  bootstrap: [AppComponent]
})
export class AppModule { }
