var domains = ['AC','AD','AE','AERO','AF','AG','AI','AL','AM','AN','AO','AQ','AR','ARPA','AS','ASIA','AT','AU','AW','AX','AZ','BA','BB','BD','BE','BF','BG','BH','BI','BIZ','BJ','BM','BN','BO','BR','BS','BT','BV','BW','BY','BZ','CA','CAT','CC','CD','CF','CG','CH','CI','CK','CL','CM','CN','CO','COM','COOP','CR','CU','CV','CW','CX','CY','CZ','DE','DJ','DK','DM','DO','DZ','EC','EDU','EE','EG','ER','ES','ET','EU','FI','FJ','FK','FM','FO','FR','GA','GB','GD','GE','GF','GG','GH','GI','GL','GM','GN','GOV','GP','GQ','GR','GS','GT','GU','GW','GY','HK','HM','HN','HR','HT','HU','ID','IE','IL','IM','IN','INFO','INT','IO','IQ','IR','IS','IT','JE','JM','JO','JOBS','JP','KE','KG','KH','KI','KM','KN','KP','KR','KW','KY','KZ','LA','LB','LC','LI','LK','LR','LS','LT','LU','LV','LY','MA','MC','MD','ME','MG','MH','MIL','MK','ML','MM','MN','MO','MOBI','MP','MQ','MR','MS','MT','MU','MUSEUM','MV','MW','MX','MY','MZ','NA','NAME','NC','NE','NET','NF','NG','NI','NL','NO','NP','NR','NU','NZ','OM','ORG','PA','PE','PF','PG','PH','PK','PL','PM','PN','POST','PR','PRO','PS','PT','PW','PY','QA','RE','RO','RS','RU','RW','SA','SB','SC','SD','SE','SG','SH','SI','SJ','SK','SL','SM','SN','SO','SR','ST','SU','SV','SX','SY','SZ','TC','TD','TEL','TF','TG','TH','TJ','TK','TL','TM','TN','TO','TP','TR','TRAVEL','TT','TV','TW','TZ','UA','UG','UK','US','UY','UZ','VA','VC','VE','VG','VI','VN','VU','WF','WS','XXX','YE','YT','ZA','ZM','ZW']


//var name = process.argv[2].toLowerCase()

function find_match(name){
	var match = []
	domains.forEach(function(domain, i){
	//console.log(domain);
	if (name.indexOf(domain.toLowerCase()) != -1 && name.indexOf(domain.toLowerCase()) != 0){
		match.push(domain);
	}
	
	
})
return match	
}

//var matches = find_match(name)
//var url = make_url(name, matches[0])



//console.log(url)

function make_url(name, tld){
	var url = ""
	var breakpt = name.indexOf(tld.toLowerCase())
	url = url + name.substring(0, breakpt) + "." + tld +"/" + name.substring((breakpt + tld.length), name.length)
	return url
	
}


exports.get_urls = function(name){
	var candidates = [];
	var matches = find_match(name)
	matches.forEach(function(match){
	//console.log(make_url(name, match))
	candidates.push(make_url(name, match))
})
	return candidates;
}