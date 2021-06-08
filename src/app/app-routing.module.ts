import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'produto-detalhe',
    loadChildren: () => import('./produto-detalhe/produto-detalhe.module').then( m => m.ProdutoDetalhePageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./compra/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'finalizar',
    loadChildren: () => import('./compra/finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadEnd',
    loadChildren: () => import('./endereco/cad/cad.module').then( m => m.CadPageModule)
  },
  {
    path: 'listEnd',
    loadChildren: () => import('./endereco/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'cadUser',
    loadChildren: () => import('./usuario/cad/cad.module').then( m => m.CadPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./usuario/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'vendas-user',
    loadChildren: () => import('./usuario/vendas-user/vendas-user.module').then( m => m.VendasUserPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
