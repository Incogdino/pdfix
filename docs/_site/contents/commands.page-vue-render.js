
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"light"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/pdfix/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/pdfix/images/logoImage.png","width":"50"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/pdfix/contents/topic1.html"}},[_v("Topic 1")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/pdfix/contents/topic2.html"}},[_v("Topic 2")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/pdfix/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/pdfix/contents/topic3b.html"}},[_v("Topic 3b")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Contents")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/contents/typicalWorkflow.html"}},[_v("Typical Workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/contents/gettingStarted.html"}},[_v("Getting started")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/contents/commands.html"}},[_v("Commands")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/pdfix/contents/plannedEnhancements.html"}},[_v("Planned enhancements")])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('br'),_v(" "),_m(0),_v(" "),_c('p',[_v("This section provides an overview of all available commands and options available in PDFix.")]),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('center',[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"text-align":"left"}},[_v("Command")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Options")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Arguments")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"text-align":"left"}},[_c('a',{attrs:{"href":"#remove-pages-from-a-pdf-file-removepages"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePages")])])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--seperator")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--name")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath> <pageNumbers>")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Removes specified pages from a pdf file")])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"left"}},[_c('a',{attrs:{"href":"#extract-pages-from-a-pdf-file-extractpages"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("extractPages")])])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--seperator")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--name")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath> <pageNumbers>")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Extracts specified pages from a pdf file")])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"left"}},[_c('a',{attrs:{"href":"#merge-pages-from-pdf-files-merge"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")])])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--name")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath1> <filePath2> [otherFilePaths]")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Takes in two or more pdf files and merges them one after the other in the order specified by the input to the arguments")])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"left"}},[_c('a',{attrs:{"href":"#the-help-command"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("-")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("-")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Returns a help page describing the list of commands avaialble")])])])])])]),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('box',{attrs:{"type":"definition","light":""}},[_c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix help")])])]),_v(" "),_m(5),_v(" "),_c('p',[_v("This displays a more detailed description of the individual commands with options available.")]),_v(" "),_c('hr'),_v(" "),_m(6),_v(" "),_c('p',[_v("This part provides an in-depth view of each individual command and what they do.")]),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('box',{attrs:{"type":"definition","light":""}},[_c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix removePages <filePath> \"<pageNumber>\" --seperator \" \" --name \"name\"")])])]),_v(" "),_c('box',{attrs:{"type":"important"}},[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<pageNumber>")]),_v(" needs to be enclosed in quotations "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"")]),_v(" for the program to render the selected pages correctly.")])]),_v(" "),_c('box',{attrs:{"type":"success","light":""}},[_c('p',[_c('strong',[_v("Arguments")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath>")]),_v(" - mandatory file path of the pdf file to modify. File path can be relative or absolute.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<pageNumber>")]),_v(" - mandatory comma seperated number. If "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--seperator")]),_v(" is defined, then string defined should be seperated by the defined seperator.")])])]),_v(" "),_c('box',{attrs:{"type":"success","light":""}},[_c('p',[_c('strong',[_v("Options")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--seperator")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-s")]),_v(" - defines a custom seperator for seperating the pages. (Default: \",\")")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--name")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n")]),_v(" - defines a custom file name to save the modified pdf file.")])])]),_v(" "),_c('box',{attrs:{"type":"info","light":""}},[_v("\n    Out of bounds pages of the pdf file are ignored (i.e. page 10 is specified but the pdf only has 5 pages)\n")]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(9),_v(" "),_c('hr'),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('box',{attrs:{"type":"definition","light":""}},[_c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix extractPages <filePath> \"<pageNumber>\" --seperator \" \" --name \"name\"")])])]),_v(" "),_c('box',{attrs:{"type":"important"}},[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<pageNumber>")]),_v(" needs to be enclosed in quotations "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"")]),_v(" for the program to render the selected pages correctly.")])]),_v(" "),_c('box',{attrs:{"type":"success","light":""}},[_c('p',[_c('strong',[_v("Arguments")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath>")]),_v(" - mandatory file path of the pdf file to modify. File path can be relative or absolute.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<pageNumber>")]),_v(" - mandatory comma seperated number. If "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--seperator")]),_v(" is defined, then string defined should be seperated by the defined seperator.")])])]),_v(" "),_c('box',{attrs:{"type":"success","light":""}},[_c('p',[_c('strong',[_v("Options")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--seperator")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-s")]),_v(" - defines a custom seperator for seperating the pages. (Default: \",\")")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--name")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n")]),_v(" - defines a custom file name to save the modified pdf file.")])])]),_v(" "),_c('box',{attrs:{"type":"info","light":""}},[_v("\n    Out of bounds pages of the pdf file are ignored (i.e. page 10 is specified but the pdf only has 5 pages)\n")]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(12),_v(" "),_c('hr'),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('box',{attrs:{"type":"definition","light":""}},[_c('p',[_c('strong',[_v("Format:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix merge <filePath1> <filePath1> [otherFilePaths]")])])]),_v(" "),_c('box',{attrs:{"type":"success","light":""}},[_c('p',[_c('strong',[_v("Arguments")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath1>")]),_v(" - mandatory file path of the first pdf file.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filePath2>")]),_v(" - mandatory file path of the second pdf file.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[otherFilePaths]")]),_v(" - optional file path of the pdf files to append.")])])]),_v(" "),_c('box',{attrs:{"type":"success","light":""}},[_c('p',[_c('strong',[_v("Options")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--name")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-n")]),_v(" - defines a custom file name to save the modified pdf file.")])])]),_v(" "),_c('box',{attrs:{"type":"info","light":""}},[_v("\n  File paths provided can be absolute or relative file paths.\n")]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(15)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(16)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"commands"}},[_v("Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"summary-of-commands"}},[_v("Summary of Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#summary-of-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("This part provides a high level summary of the list of available commands and what they do. For more specific details, please refer to the individual commands "),_c('a',{attrs:{"href":"#the-help-command"}},[_v("below")]),_v(" for the specific command.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"the-help-command"}},[_c('i',{staticClass:"fa-regular fa-circle-question"}),_v(" The help command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-help-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command displays a list of all available commands by default.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("To display usage information of a single command, call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix <command> --help")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"list-of-commands"}},[_c('i',{staticClass:"fa-solid fa-list"}),_v(" List of commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list-of-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"remove-pages-from-a-pdf-file-removepages"}},[_c('i',{staticClass:"fa-solid fa-delete-left"}),_v(" Remove pages from a pdf file: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePages")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#remove-pages-from-a-pdf-file-removepages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removePages")]),_v(" command removes specified pages from the specified pdf file.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix removePages ./firstPdf.pdf 1,3,5")]),_v(" - remove page 1,3 and 5 from the pdf file")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix removePages ./firstPdf.pdf 1/3/5 --seperator \"/\" --name modifiedPdf.pdf")]),_v(" - removes page 1,3 and 5 into a new pdf file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("modifiedPdf.pdf")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"extract-pages-from-a-pdf-file-extractpages"}},[_c('i',{staticClass:"fa-solid fa-delete-left"}),_v(" Extract pages from a pdf file: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("extractPages")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#extract-pages-from-a-pdf-file-extractpages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("extractPages")]),_v(" command removes specified pages from the specified pdf file into a new pdf file.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix extractPages ./firstPdf.pdf 1,3,5")]),_v(" - extracts page 1,3 and 5 into a new pdf file.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix extractPages ./firstPdf.pdf 1/3/5 --seperator \"/\" --name \"modifiedPdf\"")]),_v(" - extracts page 1,3 and 5 into a new pdf file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("modifiedPdf.pdf")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"merge-pages-from-pdf-files-merge"}},[_c('i',{staticClass:"fa-solid fa-code-merge"}),_v(" Merge pages from pdf files: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#merge-pages-from-pdf-files-merge","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")]),_v(" command merges "),_c('strong',[_v("two or more")]),_v(" pdf files in the order that they are specified in.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix merge ./firstPdf.pdf ./secondPdf.pdf")]),_v(" - merges the two pdf files one in the order from left to right.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdfix merge ./firstPdf.pdf ./secondPdf.pdf ./thirdPdf.pdf --name \"findPdf\"")]),_v(" - meges the three pdf file specified from left to right into a new pdf file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findPdf.pdf")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v("]")])])])}
}];
  