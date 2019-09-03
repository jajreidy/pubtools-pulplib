Search.setIndex({docnames:["api-reference","api/client","api/maintenance","api/model","api/searching","api/testing","index","logging","schema"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api-reference.rst","api/client.rst","api/maintenance.rst","api/model.rst","api/searching.rst","api/testing.rst","index.rst","logging.rst","schema.rst"],objects:{"pubtools.pulplib":{Client:[1,0,1,""],ContainerImageRepository:[3,0,1,""],Criteria:[4,0,1,""],DetachedException:[3,0,1,""],Distributor:[3,0,1,""],FakeController:[5,0,1,""],FileRepository:[3,0,1,""],FileUnit:[3,0,1,""],InvalidDataException:[3,0,1,""],MaintenanceEntry:[2,0,1,""],MaintenanceReport:[2,0,1,""],Matcher:[4,0,1,""],ModulemdUnit:[3,0,1,""],Page:[4,0,1,""],PublishOptions:[3,0,1,""],PulpException:[1,0,1,""],PulpObject:[3,0,1,""],Repository:[3,0,1,""],RpmUnit:[3,0,1,""],Task:[3,0,1,""],TaskFailedException:[1,0,1,""],Unit:[3,0,1,""],YumRepository:[3,0,1,""]},"pubtools.pulplib.Client":{get_content_type_ids:[1,1,1,""],get_maintenance_report:[1,1,1,""],get_repository:[1,1,1,""],search_repository:[1,1,1,""],set_maintenance:[1,1,1,""]},"pubtools.pulplib.ContainerImageRepository":{registry_id:[3,2,1,""]},"pubtools.pulplib.Criteria":{"true":[4,1,1,""],and_:[4,1,1,""],or_:[4,1,1,""],with_field:[4,1,1,""],with_id:[4,1,1,""]},"pubtools.pulplib.Distributor":{id:[3,2,1,""],is_rsync:[3,2,1,""],last_publish:[3,2,1,""],type_id:[3,2,1,""]},"pubtools.pulplib.FakeController":{client:[5,2,1,""],content_type_ids:[5,1,1,""],insert_repository:[5,1,1,""],insert_units:[5,1,1,""],publish_history:[5,1,1,""],repositories:[5,1,1,""],set_content_type_ids:[5,1,1,""],upload_history:[5,1,1,""]},"pubtools.pulplib.FileRepository":{upload_file:[3,1,1,""]},"pubtools.pulplib.FileUnit":{path:[3,2,1,""],sha256sum:[3,2,1,""],size:[3,2,1,""]},"pubtools.pulplib.MaintenanceEntry":{message:[2,2,1,""],owner:[2,2,1,""],repo_id:[2,2,1,""],started:[2,2,1,""]},"pubtools.pulplib.MaintenanceReport":{add:[2,1,1,""],entries:[2,2,1,""],last_updated:[2,2,1,""],last_updated_by:[2,2,1,""],remove:[2,1,1,""]},"pubtools.pulplib.Matcher":{equals:[4,1,1,""],exists:[4,1,1,""],in_:[4,1,1,""],regex:[4,1,1,""]},"pubtools.pulplib.ModulemdUnit":{arch:[3,2,1,""],context:[3,2,1,""],name:[3,2,1,""],stream:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.Page":{as_iter:[4,1,1,""],data:[4,2,1,""],next:[4,2,1,""]},"pubtools.pulplib.PublishOptions":{clean:[3,2,1,""],force:[3,2,1,""],origin_only:[3,2,1,""]},"pubtools.pulplib.PulpObject":{from_data:[3,1,1,""]},"pubtools.pulplib.Repository":{"delete":[3,1,1,""],created:[3,2,1,""],distributor:[3,1,1,""],distributors:[3,2,1,""],eng_product_id:[3,2,1,""],id:[3,2,1,""],is_sigstore:[3,2,1,""],is_temporary:[3,2,1,""],mutable_urls:[3,2,1,""],publish:[3,1,1,""],relative_url:[3,2,1,""],remove_content:[3,1,1,""],signing_keys:[3,2,1,""],skip_rsync_repodata:[3,2,1,""],type:[3,2,1,""]},"pubtools.pulplib.RpmUnit":{arch:[3,2,1,""],epoch:[3,2,1,""],md5sum:[3,2,1,""],name:[3,2,1,""],release:[3,2,1,""],sha1sum:[3,2,1,""],sha256sum:[3,2,1,""],signing_key:[3,2,1,""],version:[3,2,1,""]},"pubtools.pulplib.Task":{completed:[3,2,1,""],error_details:[3,2,1,""],error_summary:[3,2,1,""],id:[3,2,1,""],repo_id:[3,2,1,""],succeeded:[3,2,1,""],tags:[3,2,1,""],units:[3,2,1,""],units_data:[3,2,1,""]},"pubtools.pulplib.TaskFailedException":{task:[1,2,1,""]},"pubtools.pulplib.Unit":{content_type_id:[3,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute"},terms:{"05t11":8,"10aa":7,"36be54431bd":7,"39b9":8,"40f9":7,"46f0":8,"50z":8,"54ba8e8c":7,"7744e2df":8,"7fad":7,"8e06f17d22ef":7,"boolean":8,"byte":[3,8],"case":[1,3],"catch":8,"class":[1,2,3,5],"const":8,"default":3,"enum":8,"function":5,"import":[3,6],"new":[1,2,3,4,5],"null":8,"public":[5,8],"return":[1,2,3,4,6,8],"short":[3,8],"true":[3,4,8],"while":5,For:[3,4,7,8],IDs:[1,3,5,8],Such:3,The:[1,3,4,5,7,8],There:4,These:[1,3,7,8],Use:3,With:4,_content_type_id:8,_id:8,_repo:8,a9a9:7,aarch64:3,abc:4,abl:4,about:[2,4],accept:8,access:1,action:[1,3,5,6],activ:3,actual:8,add:[2,5],added:2,admin:6,affect:8,against:[3,4,5],algorithm:8,all:[1,3,4,5,6,8],allof:8,allow:[1,4,5,8],also:3,altern:1,alwai:4,anchor:4,and_:4,ani:[1,3,4,5,8],anyof:8,api:[1,3,6,7,8],appear:3,appli:[3,4],applic:3,appropri:[3,4],arbitrari:[3,4,8],arch:[3,8],architectur:[3,8],argument:1,arrai:8,as_it:4,assert:5,assoc:8,associ:3,asynchron:1,attach:[3,5],attempt:[1,3,4,7],attr:3,attribut:[3,5,7],auth:[1,6],autom:5,avail:3,avoid:4,await:[1,3,4,7],backtrac:3,bar:3,base:3,basenam:3,bash:3,bb10:8,becom:3,been:[1,3,8],befor:7,behavior:3,being:[7,8],belong:3,bfb6:7,block:[2,4,6],both:[3,4],boundari:4,brief:3,bundl:1,call:[3,4,6],caller:[3,4],can:[1,3,5],cancel:[1,7,8],cdn:8,cert:1,certain:[3,4,8],chain:4,chang:[3,6],check:2,checksum:[3,5,8],claim:5,classmethod:[3,4],clean:3,client:[0,3,4,5,6,7],cls:3,code:[4,5,6,8],collect:1,com:[1,3,6,7],comma:8,command:7,common:[1,4],commonli:3,compat:4,complet:[1,3,4,7,8],compon:[3,8],compos:4,config:8,configur:[1,3],conjunct:4,connect:1,consid:[7,8],consist:3,construct:6,contain:[1,3,4,5],containerimagerepositori:3,content:[0,1,3,5,6,8],content_type_id:[3,5],context:[3,8],control:[3,5],convent:8,copi:2,correspond:2,count:7,crash:5,creat:[2,3,4,5,7,8],creation:8,credenti:1,crit:4,criteria:[1,4],current:[1,2,4,5,7],custom:[3,8],dai:[3,5],data:[3,4,5,8],databas:[4,5],datetim:[2,3,5],dca7b4a4:3,decid:8,def:[4,5],defin:[3,4],definit:8,delet:[3,5,8],delete_old_repo:5,denot:3,depend:[1,4,8],deprec:3,describ:1,descript:8,desir:6,detach:3,detachedexcept:3,detail:[1,2,3,4,8],determin:3,dev:8,dict:[3,8],did:8,differ:8,direct:4,directli:[3,4],directori:3,displai:3,distribut:3,distributor:[3,8],distributor_id:3,distributor_type_id:8,do_someth:4,doc:8,docker:3,document:[3,4,8],doesn:2,doing:3,done:4,draft:8,due:7,dure:[1,3,4,8],e239ae4f:7,each:[1,3,4,5,8],either:3,element:[3,5,8],els:3,empti:2,enabl:7,encapsul:6,end:8,eng_product:4,eng_product_id:[3,4],engin:[2,3,8],entri:2,envr:8,epoch:[3,8],equal:4,equival:4,eras:3,errata:3,erratum:[1,5,8],error:[4,7,8],error_detail:3,error_summari:3,even:3,event:7,everi:[2,3,4,7],everywher:4,evolv:3,exactli:[3,4],exampl:[1,3,4,5,6,7,8],except:[3,4,8],execut:[4,8],exist:[2,4,5],expect:[3,8],explicitli:3,expos:3,express:4,extern:[2,3,8],f_flat_map:4,f_return:4,fail:[1,3,7,8],failur:[1,3],fake:5,fakecontrol:5,famili:3,fatal:7,fc30:3,feffa2f7014b:8,fetch:1,few:[3,7],field:[5,8],field_nam:4,field_valu:4,file:[3,5,8],file_obj:3,filenam:8,filerepositori:[3,5],fileunit:3,find:[4,5],finish:8,first:[1,2],flag:8,follow:[5,7],foo:3,forc:3,form:7,format:8,formerli:3,fragment:4,friend:4,from:[1,2,3,4,6,8],from_data:[3,8],full:3,further:3,futur:[1,3,4,6],gener:[1,3,4,5,7,8],get:[1,3,6],get_content_type_id:[1,3],get_maintenance_report:1,get_repositori:[1,6],given:[1,3,4,5],gpg:[3,8],guarante:2,guid:8,handl:[3,4],handle_result:4,handled_f:4,has:[1,3,4,5,8],have:[3,5,6],header:1,helper:3,here:5,hex:[3,8],hierarchi:4,high:1,hold:[1,2],host:3,howev:4,html:8,http:[1,3,6,7,8],idempot:1,identifi:8,ids:[2,4],imag:3,imagin:5,immut:3,impact:3,implement:[4,5],impli:3,implicitli:[4,7],in_:4,includ:[3,4,7,8],indic:[2,4,7,8],individu:[2,4],info:[3,7],inform:[2,3,4],initi:[1,8],input:4,insert:5,insert_repositori:5,insert_unit:5,inspect:5,instal:[1,3,6],instanc:[3,4,5,6],instanti:3,instead:3,integ:8,intend:4,interest:7,interfac:5,intern:1,invalid:3,invaliddataexcept:3,invok:3,is_rsync:3,is_sigstor:3,is_temporari:3,iso8601:8,iso:8,iso_distributor:8,issu:[3,4,5],item:8,iter:[3,4],itself:8,javapackag:3,json:[3,8],kei:[3,8],known:[3,5],kwarg:[1,2,3],larg:3,last:[2,3,4,8],last_publish:[3,8],last_upd:[2,8],last_updated_bi:[2,8],later:8,latest:3,lead:3,least:3,less:3,level:[1,7],librari:[1,4,5,6,7,8],lifetim:3,like:[3,5],limit:5,line:[3,8],list:[1,2,3,4,5,8],load:7,local:3,log:6,logger:7,longer:3,look:3,loop:4,made:7,mai:[1,3,4,5,6,7,8],mainten:[0,1,6],maintenanceentri:2,maintenancereport:[1,2],major:3,make:[2,3,6],mandat:8,mandatori:3,mani:7,manifest:3,map:4,match:[1,2,3,4],matcher:4,matter:[3,8],max_redirect:1,maximum:7,md5:[3,8],md5sum:3,mean:[2,8],memori:5,messag:[2,7,8],metadata:3,method:[1,2,3,4,6,7,8],min:5,minut:7,mode:[0,1,6,8],model:3,modifi:5,modul:3,modulemd:[1,3,8],modulemdunit:3,mongo:[4,8],more:[1,3,4,6],most:[1,3,5],multi:[3,8],must:[3,4,8],mutable_url:3,name:[3,4,5,8],necessari:3,need:4,nest:4,never:8,newest:1,next:4,non:[4,8],none:[1,2,3,4,5],note:[2,4,8],noth:[2,4],now:[4,5],nsvca:8,number:[1,4,5,7],object:[0,1,2,4,5,6,8],observ:8,obtain:[3,4],occur:[4,7],often:3,old:5,older:5,omit:3,one:[1,3,4,6,8],onli:[3,4,5,8],opaqu:4,openscap:3,oper:[1,2,3,4,7,8],opt:3,option:[2,3,8],or_:4,order:[3,5,8],org:8,origin:3,origin_onli:3,other:[2,4,7,8],otherwis:[3,4],ought:3,out:3,outstand:1,over:[1,4],overload:1,owner:[2,8],page:[1,4],page_f:4,pagin:4,pair:8,param:1,paramet:[1,2,3,4,5],part:3,parti:2,particular:6,pass:3,password:6,path:[3,5,8],pattern:[4,8],patternproperti:8,pcre:4,per:8,perform:[1,3,6],persist:1,person:[2,8],pick:8,piec:3,pip:6,plain:3,plp0018:8,plugin:[1,3],point:[4,6],portabl:4,possibl:[2,3,4],prefer:4,present:[3,4,8],print:4,process:[3,4],produc:[3,7],product:3,progress:7,properti:[5,8],provid:[1,3,5,8],proxi:1,pub_temp_repo:8,publish:[1,2,3,5,6,8],publish_histori:5,publishopt:3,pubtool:[1,2,3,4,5,7],pull:3,pulp2:8,pulp:[0,1,2,5,6,8],pulpexcept:1,pulplib:[1,2,3,4,5,7],pulpobject:[3,4],pulpproject:8,purpos:7,put:2,pypi:6,python:[3,4,6,8],queri:[1,4],queue:1,rais:[1,3,4,8],rather:[3,5],raw:3,readi:4,real:5,reason:[2,3],recent:5,recommend:[4,7],record:8,redhat:3,ref:8,refer:[6,8],regex:4,registri:3,registry_id:3,regular:4,rel:[3,8],relat:3,relative_url:[3,8],releas:[2,3,8],relev:[3,6],remain:2,remot:[3,5],remov:[2,3],remove_cont:3,render:3,repo:[2,3,4,5,6,8],repo_id:[2,3,8],repo_now:5,repo_old:5,repodata:8,report:[1,2,8],repositori:[1,2,4,5,6,7],repository_id:1,repres:[1,2,3,4],represent:3,request:[1,3,5],requir:[3,8],resolv:[1,3,4],respond:1,respons:[1,2],result:[1,3,4,5,6,8],retri:[1,6],rhel7:3,rhel:3,root:[3,8],roughli:4,rpm:[1,3,5,8],rpm_rsync_distributor:3,rpms__7server_x86_64:3,rpmunit:3,rsync:[3,8],run:[5,7,8],same:[4,5],satisfi:4,schema:[3,5,6],search:[0,1,3,5,6,7,8],search_repositori:[1,4],see:[3,4],sens:3,sent:7,separ:8,sequenc:3,server:[1,2,3,5,6,8],session:1,set:[1,2,3,4,5,8],set_content_type_id:5,set_mainten:1,sever:1,sha1:[3,8],sha1sum:3,sha256:[3,5,8],sha256sum:3,should:[3,4,5,8],show:[7,8],sign:[3,8],signatur:[3,8],signing_kei:[3,8],sigstor:3,simpl:5,sinc:[3,8],singl:[1,3,4,8],size:[3,8],skip:[3,8],skip_repodata:8,skip_rsync_repodata:3,some:[1,3,6],sourc:[1,2,3,4,5],spawn:1,specif:[2,3,4],specifi:4,srpm:[1,8],start:[2,4,8],state:[3,6,8],statu:[1,2],step:3,still:7,store:8,str:[1,2,3,4,5],stream:[3,8],string:[3,4,8],style:4,subclass:3,subsequ:4,subset:4,succe:[3,5,7],succeed:[1,3],successfulli:[1,3,8],suitabl:3,summari:[3,8],superset:3,support:[1,4,5],sure:2,synchron:1,syntax:4,tag:[3,8],task:[1,5,6],task_id:8,taskfailedexcept:1,technic:3,temporari:[3,8],test:[0,6],test_delete_old_repo:5,than:[3,5],thei:8,them:8,thi:[1,2,3,4,5,6,7,8],those:1,though:3,throttl:1,through:4,time:[1,2,7,8],timestamp:[2,8],titl:8,too:4,tool:[3,6,8],traceback:8,trigger:[1,3,5],tupl:[2,3,5],two:4,txt:3,type:[1,3,4,5,7,8],type_id:[3,5,8],typic:3,unassoc:8,unassoci:3,unauthor:7,unavail:3,under:5,understood:8,unit:[5,6],unit_kei:[3,8],units_data:3,units_success:8,unknown:[3,8],unrecover:1,unset:2,unsuccessfulli:8,unsupport:4,updat:[1,2,3,8],upload:[3,5],upload_fil:3,upload_histori:5,url:[1,3,6,7,8],usag:1,use:[1,3,4,5,8],used:[1,2,3,4,5,8],useful:8,user:[2,3,8],uses:[4,5],using:[3,4,5],utc:[2,3],utcnow:5,valid:[3,4,8],valu:[1,3,4,8],variou:7,verifi:1,version:[1,2,3,4,5,8],via:[3,4,5],wait:[6,8],warn:7,were:[3,8],what:3,when:[1,2,3,4,7,8],where:[3,4,8],which:[1,2,3,4,5,7,8],who:[2,3,8],whose:4,why:[2,8],with_field:4,with_id:4,within:[3,4,5],without:[3,5],wll:3,won:8,work:8,worker:8,workflow:[3,8],would:4,x86_64:3,yet:4,yield:4,you:4,your:[4,6],yum:3,yum_distributor:[3,8],yumrepositori:[3,5],zero:3,zoo:[3,6,8]},titles:["API Reference","Client","Maintenance Mode","Pulp objects","Searching","Testing","pubtools-pulplib","Logging","Schemas"],titleterms:{"class":4,"function":3,api:0,chang:7,client:1,common:3,error:[1,3],field:4,log:7,mainten:[2,8],mode:2,model:4,object:3,pubtool:6,pulp:[3,4,7],pulplib:6,quick:6,refer:[0,4],repositori:[3,8],retri:7,schema:8,search:4,start:6,state:7,task:[3,7,8],test:5,unit:[3,8],wait:7}})