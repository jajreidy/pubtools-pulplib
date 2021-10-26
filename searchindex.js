Search.setIndex({docnames:["api-reference","api/client","api/maintenance","api/model","api/searching","api/testing","index","logging","schema"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api-reference.rst","api/client.rst","api/maintenance.rst","api/model.rst","api/searching.rst","api/testing.rst","index.rst","logging.rst","schema.rst"],objects:{"pubtools.pulplib":{Client:[1,0,1,""],ContainerImageRepository:[3,0,1,""],ContainerSyncOptions:[3,0,1,""],Criteria:[4,0,1,""],DetachedException:[3,0,1,""],Distributor:[3,0,1,""],ErratumModule:[3,0,1,""],ErratumPackage:[3,0,1,""],ErratumPackageCollection:[3,0,1,""],ErratumReference:[3,0,1,""],ErratumUnit:[3,0,1,""],FakeController:[5,0,1,""],FileRepository:[3,0,1,""],FileSyncOptions:[3,0,1,""],FileUnit:[3,0,1,""],InvalidDataException:[3,0,1,""],MaintenanceEntry:[2,0,1,""],MaintenanceReport:[2,0,1,""],Matcher:[4,0,1,""],ModulemdDefaultsUnit:[3,0,1,""],ModulemdUnit:[3,0,1,""],Page:[4,0,1,""],PublishOptions:[3,0,1,""],PulpException:[1,0,1,""],PulpObject:[3,0,1,""],Repository:[3,0,1,""],RpmUnit:[3,0,1,""],SyncOptions:[3,0,1,""],Task:[3,0,1,""],TaskFailedException:[1,0,1,""],Unit:[3,0,1,""],YumRepository:[3,0,1,""],YumSyncOptions:[3,0,1,""]},"pubtools.pulplib.Client":{copy_content:[1,1,1,""],get_content_type_ids:[1,1,1,""],get_maintenance_report:[1,1,1,""],get_repository:[1,1,1,""],search_content:[1,1,1,""],search_distributor:[1,1,1,""],search_repository:[1,1,1,""],set_maintenance:[1,1,1,""]},"pubtools.pulplib.ContainerImageRepository":{registry_id:[3,2,1,""]},"pubtools.pulplib.ContainerSyncOptions":{tags:[3,2,1,""],upstream_name:[3,2,1,""]},"pubtools.pulplib.Criteria":{"true":[4,1,1,""],and_:[4,1,1,""],or_:[4,1,1,""],with_field:[4,1,1,""],with_id:[4,1,1,""],with_unit_type:[4,1,1,""]},"pubtools.pulplib.Distributor":{"delete":[3,1,1,""],id:[3,2,1,""],is_rsync:[3,2,1,""],last_publish:[3,2,1,""],relative_url:[3,2,1,""],repo_id:[3,2,1,""],type_id:[3,2,1,""]},"pubtools.pulplib.ErratumModule":{arch:[3,2,1,""],context:[3,2,1,""],name:[3,2,1,""],stream:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.ErratumPackage":{arch:[3,2,1,""],epoch:[3,2,1,""],filename:[3,2,1,""],md5sum:[3,2,1,""],name:[3,2,1,""],reboot_suggested:[3,2,1,""],release:[3,2,1,""],sha1sum:[3,2,1,""],sha256sum:[3,2,1,""],src:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.ErratumPackageCollection":{"short":[3,2,1,""],module:[3,2,1,""],name:[3,2,1,""],packages:[3,2,1,""]},"pubtools.pulplib.ErratumReference":{href:[3,2,1,""],id:[3,2,1,""],title:[3,2,1,""],type:[3,2,1,""]},"pubtools.pulplib.ErratumUnit":{content_types:[3,2,1,""],description:[3,2,1,""],from_:[3,2,1,""],id:[3,2,1,""],issued:[3,2,1,""],pkglist:[3,2,1,""],pushcount:[3,2,1,""],reboot_suggested:[3,2,1,""],references:[3,2,1,""],release:[3,2,1,""],repository_memberships:[3,2,1,""],rights:[3,2,1,""],severity:[3,2,1,""],solution:[3,2,1,""],status:[3,2,1,""],summary:[3,2,1,""],title:[3,2,1,""],type:[3,2,1,""],updated:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.FakeController":{client:[5,2,1,""],content_type_ids:[5,3,1,""],insert_repository:[5,1,1,""],insert_units:[5,1,1,""],publish_history:[5,3,1,""],repositories:[5,3,1,""],set_content_type_ids:[5,1,1,""],sync_history:[5,3,1,""]},"pubtools.pulplib.FileRepository":{upload_file:[3,1,1,""]},"pubtools.pulplib.FileSyncOptions":{remove_missing:[3,2,1,""]},"pubtools.pulplib.FileUnit":{path:[3,2,1,""],repository_memberships:[3,2,1,""],sha256sum:[3,2,1,""],size:[3,2,1,""]},"pubtools.pulplib.MaintenanceEntry":{message:[2,2,1,""],owner:[2,2,1,""],repo_id:[2,2,1,""],started:[2,2,1,""]},"pubtools.pulplib.MaintenanceReport":{add:[2,1,1,""],entries:[2,2,1,""],last_updated:[2,2,1,""],last_updated_by:[2,2,1,""],remove:[2,1,1,""]},"pubtools.pulplib.Matcher":{equals:[4,1,1,""],exists:[4,1,1,""],in_:[4,1,1,""],less_than:[4,1,1,""],regex:[4,1,1,""]},"pubtools.pulplib.ModulemdDefaultsUnit":{name:[3,2,1,""],profiles:[3,2,1,""],repo_id:[3,2,1,""],repository_memberships:[3,2,1,""],stream:[3,2,1,""]},"pubtools.pulplib.ModulemdUnit":{arch:[3,2,1,""],artifacts:[3,2,1,""],artifacts_filenames:[3,3,1,""],context:[3,2,1,""],name:[3,2,1,""],nsvca:[3,3,1,""],profiles:[3,2,1,""],repository_memberships:[3,2,1,""],stream:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.Page":{data:[4,2,1,""],next:[4,2,1,""]},"pubtools.pulplib.PublishOptions":{clean:[3,2,1,""],force:[3,2,1,""],origin_only:[3,2,1,""]},"pubtools.pulplib.PulpObject":{from_data:[3,1,1,""]},"pubtools.pulplib.Repository":{"delete":[3,1,1,""],content_set:[3,2,1,""],created:[3,2,1,""],distributor:[3,1,1,""],distributors:[3,2,1,""],eng_product_id:[3,2,1,""],file_content:[3,3,1,""],id:[3,2,1,""],is_sigstore:[3,2,1,""],is_temporary:[3,2,1,""],modulemd_content:[3,3,1,""],modulemd_defaults_content:[3,3,1,""],mutable_urls:[3,2,1,""],publish:[3,1,1,""],relative_url:[3,2,1,""],remove_content:[3,1,1,""],rpm_content:[3,3,1,""],search_content:[3,1,1,""],signing_keys:[3,2,1,""],skip_rsync_repodata:[3,2,1,""],srpm_content:[3,3,1,""],sync:[3,1,1,""],type:[3,2,1,""]},"pubtools.pulplib.RpmUnit":{arch:[3,2,1,""],epoch:[3,2,1,""],filename:[3,2,1,""],md5sum:[3,2,1,""],name:[3,2,1,""],release:[3,2,1,""],repository_memberships:[3,2,1,""],sha1sum:[3,2,1,""],sha256sum:[3,2,1,""],signing_key:[3,2,1,""],sourcerpm:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.SyncOptions":{feed:[3,2,1,""],max_speed:[3,2,1,""],proxy_host:[3,2,1,""],proxy_password:[3,2,1,""],proxy_port:[3,2,1,""],proxy_username:[3,2,1,""],ssl_ca_cert:[3,2,1,""],ssl_client_cert:[3,2,1,""],ssl_client_key:[3,2,1,""],ssl_validation:[3,2,1,""]},"pubtools.pulplib.Task":{completed:[3,2,1,""],error_details:[3,2,1,""],error_summary:[3,2,1,""],id:[3,2,1,""],repo_id:[3,2,1,""],succeeded:[3,2,1,""],tags:[3,2,1,""],units:[3,2,1,""],units_data:[3,2,1,""]},"pubtools.pulplib.TaskFailedException":{task:[1,2,1,""]},"pubtools.pulplib.Unit":{content_type_id:[3,2,1,""]},"pubtools.pulplib.YumRepository":{get_binary_repository:[3,1,1,""],get_debug_repository:[3,1,1,""],get_source_repository:[3,1,1,""],population_sources:[3,2,1,""],ubi_config_version:[3,2,1,""],ubi_population:[3,2,1,""],upload_comps_xml:[3,1,1,""],upload_erratum:[3,1,1,""],upload_metadata:[3,1,1,""],upload_modules:[3,1,1,""],upload_rpm:[3,1,1,""]},"pubtools.pulplib.YumSyncOptions":{allowed_keys:[3,2,1,""],checksum_type:[3,2,1,""],download_policy:[3,2,1,""],force_full:[3,2,1,""],max_downloads:[3,2,1,""],num_retries:[3,2,1,""],query_auth_token:[3,2,1,""],remove_missing:[3,2,1,""],require_signature:[3,2,1,""],retain_old_count:[3,2,1,""],skip:[3,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","property","Python property"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:property"},terms:{"0":[1,2,3,4,5,8],"00":4,"00z":4,"05t11":8,"06":[3,8],"0672":3,"07":8,"08":4,"0c":3,"1":[1,2,3,4,5,7],"10":7,"10aa":7,"12":[1,3],"14":4,"16":3,"17":[1,3],"2":[1,3,4,5,7,8],"201801":3,"20180813043155":3,"2019":[3,4,8],"2021":3,"24":3,"27":4,"27t00":4,"3":[3,4,7],"31":3,"32":8,"36be54431bd":7,"39":7,"39b9":8,"4":[1,2,3,5,8],"40":8,"4004":7,"401":7,"40f9":7,"41":3,"441":3,"46f0":8,"49ae93732fcf8d63fe1cce759664982dbd5b23161f007dba8561862adc96d063":4,"5":[3,5],"50z":8,"512251904":8,"522a0ee4":3,"54":3,"54ba8e8c":7,"56":8,"6":[1,3],"64":8,"6718":3,"69759d0fb9a16c0a47b1f49c78f6712e650912e1":8,"6b30e91df993d96df0bef0f9d232d1068fa2f7055f13650208d77b43cd7c99f6":4,"7":3,"7744e2df":8,"7f269185":3,"7fad":7,"8":4,"8040020210622174547":3,"8e06f17d22ef":7,"9":8,"99":3,"boolean":[3,8],"byte":[3,8],"case":[1,3],"catch":8,"class":[1,2,3,5],"const":8,"default":3,"do":[3,5],"enum":8,"final":3,"function":5,"import":[3,6,8],"int":1,"new":[1,2,3,4,5],"null":8,"public":[5,8],"return":[1,2,3,4,6,8],"short":[3,8],"true":[3,4,8],"while":[1,3,5],A:[1,2,3,4,5,6,7,8],As:3,At:4,For:[1,3,4,7,8],If:[1,2,3,4,7,8],In:[1,3,6],It:[3,4,5],No:4,On:[2,3],Or:3,Such:3,That:3,The:[1,3,4,5,7,8],There:[3,4],These:[1,3,7,8],To:3,Will:4,With:4,_base:4,_content_type_id:8,_id:8,_repo:8,a9a9:7,aarch64:3,abc:4,abl:4,about:[2,4],abov:[4,8],accept:8,access:1,accident:3,across:[1,4],action:[1,3,5,6],activ:3,actual:8,ad:[2,3],add:[2,5],addit:3,address:3,admin:6,advis:3,advisori:3,affect:8,after:3,against:[3,4,5],algorithm:8,alia:3,all:[1,3,4,5,6,8],allof:8,allow:[1,3,4,5,8],allowed_kei:3,along:3,alongsid:3,alreadi:3,also:[3,8],altern:[1,3],alwai:4,an:[1,3,4,7,8],analog:3,anchor:4,and_:4,ani:[1,3,4,5,8],anoth:1,anyof:8,api:[1,3,6,7,8],appear:3,appli:[3,4],applic:3,appropri:[3,4,5],ar:[1,2,3,4,7,8],arbitrari:[3,4,8],arbitrarili:3,arch:[3,8],architectur:[3,8],argument:1,arrai:8,artifact:[3,8],artifacts_filenam:3,assert:5,assoc:8,associ:[1,3,8],asynchron:1,atom:3,attach:[3,5],attempt:[1,3,4,7],attr:[2,3,4],attribut:[1,3,5,7],auth:[1,6],authent:3,author:3,autom:5,av:3,avail:[1,3],avoid:[3,4],await:[1,3,4,7],awar:3,b:4,back:3,background:3,backtrac:3,bar:3,base:3,basenam:3,bash:3,bb10:8,becom:3,been:[1,3,8],befor:[1,3,4,7],behavior:3,being:[3,7,8],belong:3,bewar:3,bfb6:7,binari:3,blank:3,blob:8,block:[1,2,4,6],both:[3,4,8],bound:3,boundari:4,brief:3,briefli:3,bug:3,bugfix:3,bugzilla:3,built:3,bundl:1,bytewis:3,c:4,ca:[1,3],call:[1,3,4,6],caller:[3,4],can:[1,3,5],cancel:[1,7,8],cannot:3,canon:3,care:[3,8],cdn:8,cert:1,certain:[3,4,8],certif:3,chain:4,chang:[3,6],check:2,checksum:[3,8],checksum_typ:3,cl:3,claim:5,clash:3,classmethod:[3,4],clean:3,client:[0,3,4,5,6,7],close:3,code:[1,4,5,6,8],collect:[1,3],com:[1,3,6,7,8],come:3,comma:8,command:7,common:[1,4],commonli:3,comp:3,comparison:4,compat:4,complet:[1,3,7,8],compon:[3,8],compos:4,concurr:4,config:[3,8],configur:[1,3],conjunct:4,connect:[1,3],consid:[7,8],consist:3,construct:[3,6],contact:3,contain:[1,3,4,5],containerimagerepositori:3,containersyncopt:3,content:[1,3,4,5,8],content_set:[3,8],content_typ:3,content_type_id:[3,5],context:[1,3,8],control:[3,5],convent:8,copi:[1,2],copy_cont:1,copyright:3,correspond:[2,3],count:[3,7],crash:5,creat:[2,3,4,5,7,8],creation:8,credenti:1,crit:4,criteria:[1,3,4],critic:3,current:[1,2,3,5,7],custom:[3,8],dai:[3,5],data:[3,4,5,8],databas:[4,5],date:4,datetim:[2,3,4,5],dca7b4a4:3,debug:3,debuginfo:3,decid:8,declar:3,def:[4,5],defin:[3,4],definit:8,delet:[3,5,8],delete_old_repo:5,denot:3,depend:[1,3,4,8],deprec:3,describ:[1,3],descript:[3,8],desir:6,detach:3,detachedexcept:3,detail:[1,2,3,4,8],determin:[1,3],dev:8,dict:[3,8],did:8,differ:8,direct:4,directli:[3,4],directori:3,disc2:8,displai:3,distribut:3,distributor:[1,3,8],distributor_id:3,distributor_type_id:8,dnf:3,do_someth:4,do_something_with:1,doc:8,docker:3,document:[3,4,8],doe:3,doesn:2,don:8,done:4,down:1,download:3,download_polici:3,draft:8,drpm:3,due:[1,7],duplic:8,dure:[1,3,4,8],e239ae4f:7,e:[1,3,4,5,6,8],each:[1,3,5,8],effect:3,efi:3,either:3,el7:3,el8:3,element:[3,5,8],elsewher:3,email:3,empti:2,enabl:7,encapsul:6,encourag:1,end:8,enforc:3,eng_product:4,eng_product_id:[3,4],engin:[2,3,8],enhanc:3,ensur:[1,3],entri:[2,3],envr:8,epoch:[3,8],eq:4,equal:[3,4],equival:4,eras:3,errata:3,erratum:[1,3,5,8],erratummodul:3,erratumpackag:3,erratumpackagecollect:3,erratumrefer:3,erratumunit:3,error:[4,7,8],error_detail:3,error_summari:3,even:3,event:7,everi:[2,3,4,7],everywher:4,evolv:3,exactli:[3,4],exampl:[1,3,4,5,6,7,8],except:[3,4,8],execut:[3,4,8],exist:[2,3,4,5],expect:[3,8],explain:3,explicitli:3,expos:3,express:4,extens:3,extern:[2,3,8],f0:8,f:3,f_flat_map:4,f_return:4,fail:[1,3,7,8],failur:[1,3],fake:5,fakecontrol:5,famili:3,fatal:7,fc30:3,fedora:3,feed:3,feffa2f7014b:8,fetch:1,few:[3,7],field:[1,3,5,8],field_nam:4,field_valu:4,file:[3,8],file_cont:3,file_obj:3,filenam:[3,8],filerepositori:[3,5],filesyncopt:3,fileunit:3,find:[1,3,4,5],finish:8,first:[1,2,3],flag:[3,8],follow:[3,5,7],foo:3,forc:[3,8],force_ful:3,form:[3,7],format:[3,8],formerli:3,found:3,fragment:4,friend:4,from:[1,2,3,4,6,8],from_:3,from_data:[3,8],from_repositori:1,full:3,further:3,futur:[1,3,4,6],g:[1,3,4,5,6,8],gener:[1,2,3,4,5,7,8],get:[1,3,6],get_binary_repositori:3,get_content_type_id:[1,3],get_debug_repositori:3,get_maintenance_report:1,get_repositori:[1,6],get_source_repositori:3,github:8,given:[1,3,4,5],gnu:3,gpg:[3,8],group:3,guarante:[2,3],guid:8,ha:[1,3,4,5,8],handl:[3,4],handle_result:4,handled_f:4,have:[1,3,5,6,8],header:1,helper:3,here:5,hex:[3,8],hierarchi:4,high:1,hold:[1,2],host:3,how:3,howev:4,href:3,html:[3,8],http:[1,3,6,7,8],human:3,i:3,ia64:8,id:[1,2,3,4,5,6,8],ideal:8,idempot:1,ident:3,identifi:[3,8],ignor:3,imag:3,imagin:5,immedi:3,immut:3,impact:3,implement:[4,5],impli:3,implicitli:[4,7],in_:4,includ:[3,4,7,8],incomplet:3,inconsist:3,increment:3,index:8,indic:[2,3,4,7,8],individu:2,info:[1,3,7],inform:[2,3,4],initi:[1,3,8],inner:8,input:4,insert:5,insert_repositori:5,insert_unit:5,inspect:[1,5],instal:[1,3,6],instanc:[1,3,4,5,6],instanti:3,instead:3,integ:[3,8],intend:4,intent:8,interest:7,interfac:5,intern:1,interrupt:3,invalid:3,invaliddataexcept:3,invok:3,io:3,is_rsync:3,is_sigstor:3,is_temporari:3,iso8601:8,iso:8,iso_distributor:8,issu:[3,4,5],item:8,iter:[3,4],itself:[3,8],javapackag:3,join:1,json:[3,8],just:8,kei:[3,8],keyword:3,kind:3,known:[3,5],kwarg:[1,2,3],l436:8,larg:3,larger:3,last:[2,3,4,8],last_publish:[3,4,8],last_upd:[2,8],last_updated_bi:[2,8],later:8,latest:3,lead:3,least:3,left:3,less:[3,4],less_than:4,level:[1,7],librari:[1,3,4,5,6,7,8],lifecycl:1,lifetim:3,like:[3,5],limit:5,line:[3,8],list:[1,2,3,4,5,8],ll:8,load:7,local:3,locat:3,log:[1,6],logger:7,longer:3,look:3,lookup:1,loop:4,low:3,machin:3,made:[3,7],mai:[1,3,4,5,6,7,8],mainten:[0,1,6],maintenanceentri:2,maintenancereport:[1,2],major:3,make:[2,3,6],malici:3,manag:1,mandat:8,mandatori:[1,3,8],mani:[3,7],manifest:3,map:4,match:[1,2,3,4],matcher:4,matter:[3,8],max_download:3,max_redirect:1,max_spe:3,maximum:[1,3,7],md5:[3,8],md5sum:3,mean:[1,2,3,8],memori:5,mention:8,merg:3,messag:[2,3,7,8],metadata:3,metadata_typ:3,method:[1,2,3,4,6,7,8],min:5,minut:7,mod_security_cr:3,mode:[0,1,6,8],model:3,moder:3,modifi:[3,5],modul:3,modular:3,modulemd:[1,3,8],modulemd_cont:3,modulemd_default:[3,8],modulemd_defaults_cont:3,modulemddefaultsunit:3,modulemdunit:3,mongo:[4,8],more:[1,3,4,6],most:[1,3,5],much:3,multi:[3,8],multipl:[3,8],must:[3,4,8],mutable_url:3,mutat:3,my:[4,8],name:[3,4,5,8],necessari:3,need:[1,4],nest:4,never:8,nevra:3,newest:1,next:4,noarch:3,non:[3,4,8],none:[1,2,3,4],note:[1,2,3,4,8],noth:[2,4],now:[4,5],nowadai:8,nsvca:[3,8],num_retri:3,number:[1,3,4,5,7,8],object:[0,1,2,4,5,6,8],observ:8,obtain:[3,4],occur:[3,4,7],often:3,old:[3,5,8],older:5,omit:3,on_demand:3,onc:3,one:[1,3,4,6,8],onli:[1,3,4,5,8],opaqu:4,openscap:3,oper:[1,2,3,4,7,8],oppos:3,opt:3,option:[2,3,4,8],or_:4,order:[3,5,8],org:8,origin:[3,8],origin_onli:3,other:[2,3,4,7,8],otherwis:[3,4],out:3,outstand:1,over:[1,4],overload:1,overwhelm:1,overwrit:3,overwritten:3,owner:[2,3,8],ownership:3,packag:3,page:[1,3,4],page_f:4,pagin:4,pair:8,param:1,paramet:[1,2,3,4,5],pars:3,parser:3,part:[3,8],parti:2,particular:6,pass:3,password:[3,6],path:[3,8],pattern:[4,8],patternproperti:8,pcre:4,per:[3,8],perform:[1,3,6],perl:3,permit:1,persist:1,person:[2,8],pick:8,piec:3,pip:6,pkglist:3,plain:3,pleas:3,plp0018:8,plugin:[1,3,8],point:[3,4,6],polici:3,popul:[3,8],population_sourc:[3,8],port:3,portabl:4,possibl:[2,3,4],practic:3,prefer:4,present:[3,4,8],print:4,privat:3,probabl:8,proce:3,process:[3,4],produc:[1,3,7],product:3,productid:3,profil:[3,8],progress:7,promptli:1,properti:[3,5,8],protocol:1,provid:[1,3,5,8],proxi:[1,3],proxy_host:3,proxy_password:3,proxy_port:3,proxy_usernam:3,pub_temp_repo:8,publish:[1,2,3,5,6,8],publish_histori:5,publish_task:1,publishopt:3,pubtool:[1,2,3,4,5,7],pull:3,pulp2:8,pulp:[0,1,2,5,6,8],pulp_rpm:8,pulpexcept:1,pulplib:[1,2,3,4,5,7],pulpobject:[3,4],pulpproject:8,purpos:[3,7],pushcount:3,put:2,py:8,pypi:6,python:[3,4,6,8],quai:3,queri:[1,4],query_auth_token:3,queu:1,queue:1,quirk:3,rais:[1,3,4,8],rather:[3,5],raw:3,re:[3,4,8],readabl:3,readi:4,real:5,reason:[2,3],reboot:3,reboot_suggest:3,receiv:1,recent:5,recommend:[3,4,7],record:8,redhat:3,reduc:3,ref:8,refer:[3,6,8],referenc:3,regex:4,registri:3,registry_id:3,regular:4,rel:[3,8],relat:3,relative_url:[3,8],releas:[2,3,8],relev:[3,6],remain:2,remot:[3,5],remov:[2,3],remove_cont:3,remove_miss:3,render:3,repo:[1,2,3,4,5,6,8],repo_id:[1,2,3,8],repo_now:5,repo_old:5,repodata:[3,8],report:[1,2,8],repositori:[1,2,4,5,6,7],repository_id:1,repository_membership:[3,8],repres:[1,2,3,4],represent:3,reproduc:3,republish:3,request:[1,3,5],requir:[3,4,8],require_signatur:3,resolv:[1,3,4],respect:3,respond:1,respons:[1,2],result:[1,3,4,5,6,8],retain:3,retain_old_count:3,retri:[1,3,6],revis:3,rhel4:8,rhel7:3,rhel:3,rhsa:3,rhsm:3,right:3,risk:3,root:[3,8],roughli:4,rpm:[1,3,5,8],rpm_content:3,rpm_rsync_distributor:3,rpms__7server__x86_64:3,rpms__7server_x86_64:3,rpmunit:[3,4],rsync:[3,8],run:[1,5,7,8],s:[1,2,3,4,5,7,8],same:[3,4,5],satisfi:4,scatter:1,schema:[3,5,6],search:[0,1,3,5,6,7,8],search_cont:[1,3,4],search_distributor:1,search_repositori:[1,4],sec:3,secur:3,see:[3,4,8],self:3,sens:3,sent:7,sentenc:3,separ:8,sequenc:3,server:[1,2,3,5,6,8],session:1,set:[1,2,3,4,5,8],set_content_type_id:5,set_mainten:1,sever:[1,3],sha1:[3,8],sha1sum:3,sha256:[3,8],sha256sum:[3,4],should:[3,4,5,8],show:[7,8],shut:1,sign:[3,8],signatur:[3,8],signing_kei:[3,8],sigstor:3,simpl:5,sinc:[3,8],singl:[1,3,4,8],size:[3,8],skip:[3,8],skip_repodata:8,skip_rsync_repodata:3,so:[1,3,8],sole:3,solut:3,some:[1,3,6,8],sourc:[1,2,3,4,5,8],sourcerpm:[3,8],spawn:1,specif:[2,3,4],specifi:[3,4],speed:3,sqlite:3,src:3,srpm:[1,3,8],srpm_content:3,ssl:3,ssl_ca_cert:3,ssl_client_cert:3,ssl_client_kei:3,ssl_valid:3,start:[2,3,4,8],state:[3,6,8],statement:1,statu:[1,2,3],step:3,still:7,store:[3,8],str:[1,2,3,4,5],stream:[3,8],string:[3,4,8],strongli:3,style:[3,4],subclass:[1,3,4,5],subsequ:4,subset:[1,4],succe:[3,5,7],succeed:[1,3],successfulli:[1,3,8],suitabl:3,sum:4,summari:[3,8],superset:3,support:[1,3,4,5,8],suppos:8,sure:2,sync:[3,5],sync_config:5,sync_histori:5,syncconfig:5,synchron:[1,3],syncopt:3,syntax:4,system:3,t:[1,2,8],tag:[3,8],take:3,target:3,task:[1,5,6],task_id:[1,8],task_throttl:1,taskfailedexcept:1,technic:3,temporari:[3,8],test:[0,6],test_delete_old_repo:5,text:3,than:[1,3,4,5],thei:8,them:8,therefor:3,thi:[1,2,3,4,5,6,7,8],those:1,though:[3,8],thread:[1,3],throttl:1,through:4,throughout:1,time:[1,2,3,7,8],timestamp:[2,3,8],titl:[3,8],to_repositori:1,token:3,too:4,tool:[3,6,8],traceback:8,trigger:[1,3,5],triplet:3,tupl:5,two:4,txt:3,type:[1,3,4,5,7,8],type_id:[3,5,8],typic:[1,3],u5:8,ubi:[3,8],ubi_config_vers:[3,8],ubi_popul:[3,8],unassoc:8,unassoci:3,unauthor:7,unavail:3,under:5,understood:8,uniqu:3,unit:[1,4,5,6],unit_kei:[3,8],unit_typ:4,units_data:3,units_success:8,unknown:[3,8],unless:3,unlik:3,unrecover:1,unset:2,unsuccessfulli:8,unsupport:4,up:[3,4,8],updat:[1,2,3,8],upload:[3,8],upload_comps_xml:3,upload_erratum:3,upload_fil:3,upload_metadata:3,upload_modul:3,upload_rpm:3,upstream:3,upstream_nam:3,url:[1,3,6,7,8],us:[1,2,3,4,5,8],usag:1,user:[2,3,8],usernam:3,usual:3,utc:[2,3],utcnow:5,v1:3,v2:[3,7,8],valid:[3,4,8],valu:[1,3,4,8],variou:[3,7],verifi:[1,3],version:[1,2,3,4,5,8],via:[1,3,4,5],virt:3,wa:[2,3,5,8],wait:[1,6,8],want:3,warn:[3,7],we:[4,5,8],were:[1,3,8],what:[3,8],when:[1,2,3,4,7,8],whenev:3,where:[3,4,8],whether:3,which:[1,2,3,4,5,7,8],who:[2,3,8],whose:4,why:[2,8],with_field:4,with_id:4,with_unit_typ:4,within:[1,3,4,5],without:[1,3,5],wll:3,won:8,work:8,worker:8,workflow:[3,8],wors:3,would:[4,8],written:1,x86_64:3,x:[1,3,4,8],xml:3,yaml:3,you:[3,4],your:[4,6],yum:[3,8],yum_distributor:[3,8],yumrepositori:[3,5],yumsyncopt:3,z:8,zero:3,zoo:[3,6,8]},titles:["API Reference","Client","Maintenance Mode","Pulp objects","Searching","Testing","pubtools-pulplib","Logging","Schemas"],titleterms:{"class":4,"function":3,api:0,chang:7,client:1,common:3,content:[0,6],error:[1,3],field:4,log:7,mainten:[2,8],mode:2,model:4,object:3,pubtool:6,pulp:[3,4,7],pulplib:6,quick:6,refer:[0,4],repositori:[3,8],retri:7,schema:8,search:4,start:6,state:7,task:[3,7,8],test:5,unit:[3,8],vs:4,wait:7}})