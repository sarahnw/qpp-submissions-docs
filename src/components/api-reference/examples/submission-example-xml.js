const xmlString = "<?xml version=\"1.0\"?><data><submission><programName>mips</programName><entityType>individual</entityType><taxpayerIdentificationNumber>000456789</taxpayerIdentificationNumber><nationalProviderIdentifier>9876543210</nationalProviderIdentifier><performanceYear>2016</performanceYear><measurementSet><category>ia</category><submissionMethod>cmsWebInterface</submissionMethod><measureSet/><performanceStart>2016-01-01</performanceStart><performanceEnd>2016-06-01</performanceEnd><measurement><measureId>IA_EPA_4</measureId><value>true</value></measurement><measurement><measureId>IA_PM_2</measureId><value>true</value></measurement><measurement><measureId>IA_PSPA_4</measureId><value>true</value></measurement><measurement><measureId>IA_PSPA_5</measureId><value>true</value></measurement></measurementSet><measurementSet><version>0.0.1</version><category>aci</category><submissionMethod>cmsWebInterface</submissionMethod><measureSet/><performanceStart>2016-01-01</performanceStart><performanceEnd>2016-06-01</performanceEnd><measurement><measureId>ACI_HIE_3</measureId><value><numerator>1</numerator><denominator>2</denominator></value></measurement><measurement><measureId>ACI_INFBLO_1</measureId><value>true</value></measurement></measurementSet></submission></data>";

module.exports = xmlString;
