
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/pdfix/index.html","title":"Home"}},[_v("Your Logo")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/pdfix/contents/topic1.html"}},[_v("Topic 1")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/pdfix/contents/topic2.html"}},[_v("Topic 2")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/pdfix/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/pdfix/contents/topic3b.html"}},[_v("Topic 3b")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Contents")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/contents/typicalWorkflow.html"}},[_v("Typical Workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/contents/commands.html"}},[_v("Commands")])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('br'),_v(" "),_m(0),_v(" "),_c('p',[_v("This section tells you how PDFix is typically used.")]),_v(" "),_c('p',[_v("PDFix is not meant to be used as a standalone tool. It should be used to complement other document tools. For instance, a pdf viewer like Adobe Acrobat should be used alongside PDFix to view and determine the pages to remove.")]),_v(" "),_c('p',[_v("This is what a typical workflow for PDFix may look like for removing some pages off a pdf file:")]),_v(" "),_m(1),_v(" "),_c('center',[_c('img',{attrs:{"src":"/pdfix/images/openPdfInViewer.png","width":"850","alt":"Opening pdf file in pdf viewer"}})]),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('box',{attrs:{"type":"tip"}},[_c('p',[_v("Navigate to your desired location and issue the commands from that location. This will cause PDFix to create the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removed")]),_v(" folder from your current location.")])])],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(4)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"typical-workflow"}},[_v("Typical Workflow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typical-workflow","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Open the pdf file in a pdf viewer such as Adobe Acrobat or your browser")])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"2"}},[_c('li',[_c('p',[_v("Take note of the pages that you want to remove from the pdf file")])]),_v(" "),_c('li',[_c('p',[_v("Run the "),_c('a',{attrs:{"href":""}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePages")])]),_v(" command from the command line")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The updated pdf file will be stored in a seperate folder named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("updated")]),_v(" in the same location the command was called.")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v("]")])])])}
}];
  