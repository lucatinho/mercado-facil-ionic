import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'lista/:id',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pagenotfound',
    loadChildren: () => import('./pages/pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'endereco-edit',
    loadChildren: () => import('./pages/user/endereco-edit/endereco-edit.module').then( m => m.EnderecoEditPageModule)
  },
  {
    path: 'endereco-novo',
    loadChildren: () => import('./pages/user/endereco-novo/endereco-novo.module').then( m => m.EnderecoNovoPageModule)
  },
  {
    path: 'lista-compras',
    loadChildren: () => import('./pages/lista-compras/lista-compras.module').then( m => m.ListaComprasPageModule)
  }
];
@NgModule({
  imports: [
    ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
