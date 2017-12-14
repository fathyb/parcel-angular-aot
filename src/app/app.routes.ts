import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LazyComponent } from './shared/components/lazy/lazy.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lazy', loadChildren: './shared/components/lazy/lazy.module#LazyModule' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

const ctx = window as any

ctx.System = {
  async import() {
    await import('./shared/components/lazy/lazy.module.ngfactory')
    const req = ctx['req' + 'u' + 'ire']

    const mod = Object
      .keys(req.cache)
      .map(key => req.cache[key])
      .find(mod => {
        console.log('mode', mod)

        return mod.exports && mod.exports.LazyModuleNgFactory
      })

    console.log('factory', mod)

    return mod.exports
  }
}
