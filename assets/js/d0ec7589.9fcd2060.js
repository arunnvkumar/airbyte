"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4935],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12874:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={},p="Marketo",s={unversionedId:"integrations/sources/marketo",id:"integrations/sources/marketo",title:"Marketo",description:"Sync overview",source:"@site/../docs/integrations/sources/marketo.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/marketo",permalink:"/integrations/sources/marketo",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/marketo.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Mailchimp",permalink:"/integrations/sources/mailchimp"},next:{title:"Metabase",permalink:"/integrations/sources/metabase"}},d={},m=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Step 2: Create an API-only Marketo User Role",id:"step-2-create-an-api-only-marketo-user-role",level:4},{value:"Step 3: Create an Airbyte Marketo API-only user",id:"step-3-create-an-airbyte-marketo-api-only-user",level:4},{value:"Step 5: Obtain your Endpoint and Identity URLs provided by Marketo",id:"step-5-obtain-your-endpoint-and-identity-urls-provided-by-marketo",level:4},{value:"CHANGELOG",id:"changelog",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"marketo"},"Marketo"),(0,o.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,o.kt)("p",null,"The Marketo source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,o.kt)("p",null,"This connector is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This connector can be used to sync the following tables from Marketo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"activities","_","X")," where X is an activity type contains information about lead activities of the type X. For example, activities","_","send","_","email contains information about lead activities related to the activity type ",(0,o.kt)("inlineCode",{parentName:"li"},"send_email"),". See the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Activities/getLeadActivitiesUsingGET"},"Marketo docs")," for a detailed explanation of what each column means. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"activity","_","types.")," Contains metadata about activity types. See the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Activities/getAllActivityTypesUsingGET"},"Marketo docs")," for a detailed explanation of columns. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"campaigns.")," Contains info about your Marketo campaigns. ",(0,o.kt)("a",{parentName:"li",href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Campaigns/getCampaignsUsingGET"},"Marketo docs"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"leads.")," Contains info about your Marketo leads. ",(0,o.kt)("a",{parentName:"li",href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Leads/getLeadByIdUsingGET"},"Marketo docs"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lists.")," Contains info about your Marketo static lists. ",(0,o.kt)("a",{parentName:"li",href:"https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Static_Lists/getListByIdUsingGET"},"Marketo docs"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"programs.")," Contins info about your Marketo programs. ",(0,o.kt)("a",{parentName:"li",href:"https://developers.marketo.com/rest-api/endpoint-reference/asset-endpoint-reference/#!/Programs/browseProgramsUsingGET"},"Marketo docs"),". ")),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},"primitive arrays are converted into arrays of the types described in this table")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"long")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"`","`")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("p",null,"Feature"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"By default, Marketo caps all accounts to 50,000 API calls per day."),(0,o.kt)("p",null,"By default, this connector caps itself to 40,000 API calls per day. But you can also customize the maximum number of API calls this source connector makes per day to Marketo ","(","which may be helpful if you have for example other applications which are also hitting the Marketo API",")",". If this source connector reaches the maximum number you configured, it will not replicate any data until the next day."),(0,o.kt)("p",null,"If the 50,000 limit is too stringent, contact Marketo support for a quota increase."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(","Optional",")"," Whitelist Airbyte's IP address if needed"),(0,o.kt)("li",{parentName:"ul"},"An API-only Marketo User Role "),(0,o.kt)("li",{parentName:"ul"},"An Airbyte Marketo API-only user"),(0,o.kt)("li",{parentName:"ul"},"A Marketo API Custom Service"),(0,o.kt)("li",{parentName:"ul"},"Marketo Client ID & Client Secret"),(0,o.kt)("li",{parentName:"ul"},"Marketo Base URL ")),(0,o.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: ","(","Optional",")"," whitelist Airbyte's IP address")),(0,o.kt)("p",null,"If you don't have IP Restriction enabled in Marketo, skip this step."),(0,o.kt)("p",null,"If you have IP Restriction enabled in Marketo, you'll need to whitelist the IP address of the machine running your Airbyte instance. To obtain your IP address, run ",(0,o.kt)("inlineCode",{parentName:"p"},"curl ifconfig.io")," from the node running Airbyte. You might need to enlist an engineer to help with this. Copy the IP address returned and keep it on hand."),(0,o.kt)("p",null,"Once you have the IP address, whitelist it by following the Marketo documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.marketo.com/display/public/DOCS/Create+an+Allowlist+for+IP-Based+API+Access"},"allowlisting IP addresses")," for API based access."),(0,o.kt)("h4",{id:"step-2-create-an-api-only-marketo-user-role"},"Step 2: Create an API-only Marketo User Role"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.marketo.com/display/public/DOCS/Create+an+API+Only+User+Role"},"Marketo documentation for creating an API-only Marketo User Role"),"."),(0,o.kt)("h4",{id:"step-3-create-an-airbyte-marketo-api-only-user"},"Step 3: Create an Airbyte Marketo API-only user"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.marketo.com/display/public/DOCS/Create+an+API+Only+User"},"Marketo documentation to create an API only user")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4: Create a Marketo API custom service")),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.marketo.com/display/public/DOCS/Create+a+Custom+Service+for+Use+with+ReST+API"},"Marketo documentation for creating a custom service for use with a REST API"),"."),(0,o.kt)("p",null,'Make sure to follow the "',(0,o.kt)("strong",{parentName:"p"},'Credentials for API Access"')," section in the Marketo docs to generate a ",(0,o.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,o.kt)("strong",{parentName:"p"},"Client Secret.")," Once generated, copy those credentials and keep them handy for use in the Airbyte UI later."),(0,o.kt)("h4",{id:"step-5-obtain-your-endpoint-and-identity-urls-provided-by-marketo"},"Step 5: Obtain your Endpoint and Identity URLs provided by Marketo"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.marketo.com/rest-api/base-url/"},"Marketo documentation for obtaining your base URL"),". Specifically, copy your ",(0,o.kt)("strong",{parentName:"p"},"Endpoint"),' without "/rest" and keep them handy for use in the Airbyte UI.'),(0,o.kt)("p",null,"We're almost there! Armed with your Endpoint & Identity URLs and your Client ID and Secret, head over to the Airbyte UI to setup Marketo as a source."),(0,o.kt)("p",null,"*","*","*","*"),(0,o.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-06-20"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13930"},"13930")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Process failing creation of export jobs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8578"},"8429")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Updated titles and descriptions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-03"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8483"},"8483")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Improve field conversion to conform schema")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.1")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-29"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/0000"},"0000")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fix timestamp value format issue")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-06"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5863"},"5863")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Release Marketo CDK Connector")))))}u.isMDXComponent=!0}}]);