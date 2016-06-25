const cities = [
    {
        "name": "Tirana, Albania - Rinas (TIA)"
    },
    {
        "name": "Sarajevo, Bosnia and Herzegovina - Butmir (SJJ)"
    },
    {
        "name": "Anguilla Island, Anguilla - Wallblake (AXA)"
    },
    {
        "name": "Saint Johns, Antigua and Barbuda - VC Bird Int. (ANU)"
    },
    {
        "name": "Buenos Aires, Argentina - Ministro Pistarini Int. (EZE)"
    },
    {
        "name": "Aruba Island, Aruba - Queen Beatrix Int. (AUA)"
    },
    {
        "name": "Adelaide, Australia - Adelaide Int. (ADL)"
    },
    {
        "name": "Brisbane, Australia - Brisbane Int. (BNE)"
    },
    {
        "name": "Cairns, Australia - Cairns Int. (CNS)"
    },
    {
        "name": "Canberra, Australia - Canberra (CBR)"
    },
    {
        "name": "Coolangatta, Australia - Gold Coast (OOL)"
    },
    {
        "name": "Darwin, Australia - Darwin Int. (DRW)"
    },
    {
        "name": "Hobart, Australia - Hobart (HBA)"
    },
    {
        "name": "Launceston, Australia - Launceston (LST)"
    },
    {
        "name": "Melbourne, Australia - Melbourne Int. (MEL)"
    },
    {
        "name": "Perth, Australia - Perth Int. (PER)"
    },
    {
        "name": "Sydney, Australia - Kingsford Smith Int. (SYD)"
    },
    {
        "name": "Innsbruck, Austria - Innsbruck (INN)"
    },
    {
        "name": "Vienna, Austria - Vienna Int. (VIE)"
    },
    {
        "name": "Baku, Azerbaijan - Baku (BAK)"
    },
    {
        "name": "Abaco Island, Bahamas - Marsh Harbour (MHH)"
    },
    {
        "name": "Abaco Island, Bahamas - Treasure Cay (TCB)"
    },
    {
        "name": "Andros Island, Bahamas - Andros Town Int. (ASD)"
    },
    {
        "name": "Bimini, Bahamas - Bimini Island Int. (BIM)"
    },
    {
        "name": "Cat Island, Bahamas - New Bight (TBI)"
    },
    {
        "name": "Eleuthera Island, Bahamas - North Eleuthera (ELH)"
    },
    {
        "name": "Freeport, Bahamas - Freeport Int. (FPO)"
    },
    {
        "name": "Great Exuma Island, Bahamas - Exuma Int. (GGT)"
    },
    {
        "name": "Nassau, Bahamas - Nassau Int. (NAS)"
    },
    {
        "name": "Bahrain, Bahrain - Bahrain Int. (BAH)"
    },
    {
        "name": "Dhaka, Bangladesh - Zia Int. (DAC)"
    },
    {
        "name": "Bridgetown, Barbados - Grantley Adams Int. (BGI)"
    },
    {
        "name": "Brussels, Belgium - Brussels Int. (BRU)"
    },
    {
        "name": "Brussels, Belgium - Charleroi (CRL)"
    },
    {
        "name": "Belize City, Belize - Phillip S W Goldson (BZE)"
    },
    {
        "name": "Cotonou, Benin - Cadjehoun (COO)"
    },
    {
        "name": "Bermuda Island, Bermuda - Bermuda Int. (BDA)"
    },
    {
        "name": "La Paz, Bolivia - El Alto Int. (LPB)"
    },
    {
        "name": "Santa Cruz, Bolivia - Viru Viru Int. (VVI)"
    },
    {
        "name": "Brasilia, Brazil - Kubitschek Int. (BSB)"
    },
    {
        "name": "Campo Grande, Brazil - Campo Grande Int. (CGR)"
    },
    {
        "name": "Cuiaba, Brazil - Marechal Rondon Int. (CGB)"
    },
    {
        "name": "Curitiba, Brazil - Afonso Pena Int. (CWB)"
    },
    {
        "name": "Florianopolis, Brazil - Hercillio Luz Int. (FLN)"
    },
    {
        "name": "Fortaleza, Brazil - Pinto Martins Int. (FOR)"
    },
    {
        "name": "Iguassa Falls, Brazil - Iguassa Falls (IGU)"
    },
    {
        "name": "Londrina, Brazil - Londrina (LDB)"
    },
    {
        "name": "Manaus, Brazil - Eduardo Gomes Int. (MAO)"
    },
    {
        "name": "Navegantes, Brazil - Navegantes-Itajai (NVT)"
    },
    {
        "name": "Porto Alegre, Brazil - Salgado Filho Int. (POA)"
    },
    {
        "name": "Recife, Brazil - Guararapes Int. (REC)"
    },
    {
        "name": "Rio de Janeiro, Brazil - Rio de Janeiro Int. (GIG)"
    },
    {
        "name": "Salvador, Brazil - Salvador Int. (SSA)"
    },
    {
        "name": "Sao Paulo, Brazil - Congonhas Int. (CGH)"
    },
    {
        "name": "Sao Paulo, Brazil - Guarulhos Int. (GRU)"
    },
    {
        "name": "Ouagadougou, Burkina Faso - Ouagadougou (OUA)"
    },
    {
        "name": "Douala, Cameroon - Douala (DLA)"
    },
    {
        "name": "Yaounde, Cameroon - Nsimalen (NSI)"
    },
    {
        "name": "Calgary, Canada - Calgary Int. (YYC)"
    },
    {
        "name": "Edmonton, Canada - Edmonton Int. (YEG)"
    },
    {
        "name": "Fredericton, Canada - Greater Fredericton (YFC)"
    },
    {
        "name": "Halifax, Canada - Halifax Int. (YHZ)"
    },
    {
        "name": "Kelowna, Canada - City of Kelowna (YLW)"
    },
    {
        "name": "London, Canada - London (YXU)"
    },
    {
        "name": "Moncton, Canada - Moncton Int. (YQM)"
    },
    {
        "name": "Montreal, Canada - Mirabel Int. (YMX)"
    },
    {
        "name": "Montreal, Canada - Montreal Dorval (YUL)"
    },
    {
        "name": "Ottawa, Canada - Ottawa Int. (YOW)"
    },
    {
        "name": "Quebec City, Canada - Jean Lesage Int. (YQB)"
    },
    {
        "name": "Regina, Canada - Regina Int. (YQR)"
    },
    {
        "name": "Saint John's, Canada - St John's Int. (YYT)"
    },
    {
        "name": "Saskatoon, Canada - Saskatoon Int. (YXE)"
    },
    {
        "name": "Sydney, Canada - Sydney (YQY)"
    },
    {
        "name": "Thunder Bay, Canada - Thunder Bay Int. (YQT)"
    },
    {
        "name": "Toronto, Canada - Lester B Pearson Int. (YYZ)"
    },
    {
        "name": "Vancouver, Canada - Vancouver Int. (YVR)"
    },
    {
        "name": "Victoria, Canada - Victoria Int. (YYJ)"
    },
    {
        "name": "Winnipeg, Canada - Winnipeg Int. (YWG)"
    },
    {
        "name": "Sal, Cape Verde - Amilcar Cabral Int. (SID)"
    },
    {
        "name": "Grand Cayman, Cayman Islands - Owen Roberts Int. (GCM)"
    },
    {
        "name": "N'Djamena, Chad - N'Djamena (NDJ)"
    },
    {
        "name": "Antofagasta, Chile - Cerro Moreno Int. (ANF)"
    },
    {
        "name": "Concepcion, Chile - Carriel Sur Int. (CCP)"
    },
    {
        "name": "Iquique, Chile - Diego Aracena Int. (IQQ)"
    },
    {
        "name": "Mataveri, Chile - Easter Island (IPC)"
    },
    {
        "name": "Puerto Montt, Chile - El Tepual Int. (PMC)"
    },
    {
        "name": "Punta Arenas, Chile - Punta Arenas Int. (PUQ)"
    },
    {
        "name": "Santiago, Chile - Benitez Int. (SCL)"
    },
    {
        "name": "Beijing, China - Beijing Capital Int. (PEK)"
    },
    {
        "name": "Chengdu, China - Shuangliu (CTU)"
    },
    {
        "name": "Chongqing, China - Jiangbei (CKG)"
    },
    {
        "name": "Fuzhou, China - Changle (FOC)"
    },
    {
        "name": "Guangzhou, China - Baiyun (CAN)"
    },
    {
        "name": "Hong Kong, China - Hong Kong Int. (HKG)"
    },
    {
        "name": "Shanghai, China - Pudong (PVG)"
    },
    {
        "name": "Shanghai, China - Hongqiao Int. (SHA)"
    },
    {
        "name": "Shenyang, China - Taoxian (SHE)"
    },
    {
        "name": "Shenzhen, China - Huangtian (SZX)"
    },
    {
        "name": "Xi'an, China - Xianyang (XIY)"
    },
    {
        "name": "Barranquilla, Colombia - Ernesto Cortissoz (BAQ)"
    },
    {
        "name": "Bogota, Colombia - Eldorado Int. (BOG)"
    },
    {
        "name": "Cali, Colombia - Aragon Int. (CLO)"
    },
    {
        "name": "Cartagena, Colombia - Rafael Nunez (CTG)"
    },
    {
        "name": "Medellin, Colombia - Jose Maria Cordova Int. (MDE)"
    },
    {
        "name": "Pereira, Colombia - Matecana Int. (PEI)"
    },
    {
        "name": "Brazzaville, Congo - Maya-Maya (BZV)"
    },
    {
        "name": "Rarotonga Island, Cook Islands - Rarotonga Int. (RAR)"
    },
    {
        "name": "Liberia, Costa Rica - Daniel Oduber Quiros Int. (LIR)"
    },
    {
        "name": "San Jose, Costa Rica - Juan Santa Maria Int. (SJO)"
    },
    {
        "name": "Split, Croatia - Kastela (SPU)"
    },
    {
        "name": "Zagreb, Croatia - Pleso (ZAG)"
    },
    {
        "name": "Havana, Cuba - Jose Marti Int. (HAV)"
    },
    {
        "name": "Larnaca, Cyprus - Larnaca Int. (LCA)"
    },
    {
        "name": "Ostrava, Czech Republic - Mosnov (OSR)"
    },
    {
        "name": "Prague, Czech Republic - Ruzyne Int. (PRG)"
    },
    {
        "name": "Aalborg, Denmark - Aalborg (AAL)"
    },
    {
        "name": "Aarhus, Denmark - Aarhus (AAR)"
    },
    {
        "name": "Billund, Denmark - Billund (BLL)"
    },
    {
        "name": "Copenhagen, Denmark - Kastrup Int. (CPH)"
    },
    {
        "name": "Roseau, Dominica - Melville Hall (DOM)"
    },
    {
        "name": "La Romana, Dominican Republic - La Romana Int. (LRM)"
    },
    {
        "name": "Puerto Plata, Dominican Republic - La Union Int. (POP)"
    },
    {
        "name": "Punta Cana, Dominican Republic - Punta Cana Int. (PUJ)"
    },
    {
        "name": "Santiago City, Dominican Republic - Cibao Int. (STI)"
    },
    {
        "name": "Santo Domingo, Dominican Republic - Las Americas Int. (SDQ)"
    },
    {
        "name": "Guayaquil, Ecuador - Simon Bolivar Int. (GYE)"
    },
    {
        "name": "Quito, Ecuador - Mariscal Sucre Int. (UIO)"
    },
    {
        "name": "Alexandria, Egypt - Borg El Arab Int. (HBE)"
    },
    {
        "name": "Cairo, Egypt - Cairo Int. (CAI)"
    },
    {
        "name": "San Salvador, El Salvador - Comalapa Int. (SAL)"
    },
    {
        "name": "Malabo, Equatorial Guinea - Malabo (SSG)"
    },
    {
        "name": "Talinn, Estonia - Ulemiste (TLL)"
    },
    {
        "name": "Addis Ababa, Ethiopia - Bole Int. (ADD)"
    },
    {
        "name": "Nadi, Fiji - Nadi Int. (NAN)"
    },
    {
        "name": "Helsinki, Finland - Vantaa Int. (HEL)"
    },
    {
        "name": "Basle-Mulhouse, France - Basle-Mulhouse (MLH)"
    },
    {
        "name": "Biarritz, France - Bayonne-Anglet (BIQ)"
    },
    {
        "name": "Bordeaux, France - Merignac (BOD)"
    },
    {
        "name": "Brest, France - Guipavas (BES)"
    },
    {
        "name": "Clermont-Ferrand, France - Aulnat (CFE)"
    },
    {
        "name": "Grenoble, France - St Geoirs (GNB)"
    },
    {
        "name": "Limoges, France - Bellegarde (LIG)"
    },
    {
        "name": "Lyon, France - Satolas (LYS)"
    },
    {
        "name": "Marseille/Provence, France - Marseille/Provence (MRS)"
    },
    {
        "name": "Montpellier, France - Montpellier (MPL)"
    },
    {
        "name": "Nantes, France - Nantes (NTE)"
    },
    {
        "name": "Nice, France - Cote d'Azur Int. (NCE)"
    },
    {
        "name": "Paris, France - Charles De Gaulle Int. (CDG)"
    },
    {
        "name": "Paris, France - Le Bourget (LBG)"
    },
    {
        "name": "Paris, France - Orly (ORY)"
    },
    {
        "name": "Rennes, France - St Jacques (RNS)"
    },
    {
        "name": "Strasbourg, France - Entzheim (SXB)"
    },
    {
        "name": "Toulouse, France - Blagnac (TLS)"
    },
    {
        "name": "Tahiti Island, French Polynesia - Papeete Faaa (PPT)"
    },
    {
        "name": "Libreville, Gabon - Leon M'ba (LBV)"
    },
    {
        "name": "Banjul, Gambia - Banjul Int. (BJL)"
    },
    {
        "name": "Berlin, Germany - Schonefeld (SXF)"
    },
    {
        "name": "Berlin, Germany - Tegel (TXL)"
    },
    {
        "name": "Bremen, Germany - Bremen (BRE)"
    },
    {
        "name": "Cologne-Bonn, Germany - Cologne-Bonn (CGN)"
    },
    {
        "name": "Duesseldorf, Germany - Duesseldorf Int. (DUS)"
    },
    {
        "name": "Frankfurt, Germany - Frankfurt Int. (FRA)"
    },
    {
        "name": "Hamburg, Germany - Hamburg (HAM)"
    },
    {
        "name": "Hannover, Germany - Hannover (HAJ)"
    },
    {
        "name": "Munich, Germany - Franz Josef Strauss Int. (MUC)"
    },
    {
        "name": "Nuremberg, Germany - Nuremberg (NUE)"
    },
    {
        "name": "Stuttgart, Germany - Echterdingen Int. (STR)"
    },
    {
        "name": "Accra, Ghana - Kotoka Int. (ACC)"
    },
    {
        "name": "Athens, Greece - Athens Int. (ATH)"
    },
    {
        "name": "Saint Georges, Grenada - Point Salines Int. (GND)"
    },
    {
        "name": "Point-A-Pitre, Guadeloupe - Le Raizet Int. (PTP)"
    },
    {
        "name": "Guam, Guam - Guam Int. (GUM)"
    },
    {
        "name": "Flores, Guatemala - Tikal Int. (FRS)"
    },
    {
        "name": "Guatemala City, Guatemala - La Aurora Int. (GUA)"
    },
    {
        "name": "Conakry, Guinea - Gbessia (CKY)"
    },
    {
        "name": "Georgetown, Guyana - Cheddi Jagan Int. (GEO)"
    },
    {
        "name": "Port-au-Prince, Haiti - Port-au-Prince Int. (PAP)"
    },
    {
        "name": "Roatan, Honduras - Roatan Island (RTB)"
    },
    {
        "name": "San Pedro Sula, Honduras - La Mesa Int. (SAP)"
    },
    {
        "name": "Tegucigalpa, Honduras - Toncontin Int. (TGU)"
    },
    {
        "name": "Budapest, Hungary - Ferihegy (BUD)"
    },
    {
        "name": "Keflavik, Iceland - Keflavik Int. (KEF)"
    },
    {
        "name": "Ahmedabad, India - Ahmedabad Int. (AMD)"
    },
    {
        "name": "Bangalore, India - Hindustan Int. (BLR)"
    },
    {
        "name": "Delhi, India - Indira Gandhi Int. (DEL)"
    },
    {
        "name": "Madras, India - Chennai Int. (MAA)"
    },
    {
        "name": "Mumbai, India - Sahar Int. (BOM)"
    },
    {
        "name": "Den Pasar, Indonesia - Bali Int. (DPS)"
    },
    {
        "name": "Jakarta, Indonesia - Soekarno-Hatta Int. (CGK)"
    },
    {
        "name": "Surabaya, Indonesia - Juanda (SUB)"
    },
    {
        "name": "Tehran, Iran - Mehrabad Int. (THR)"
    },
    {
        "name": "Dublin, Ireland - Dublin Int. (DUB)"
    },
    {
        "name": "Shannon, Ireland - Shannon Int. (SNN)"
    },
    {
        "name": "Tel Aviv, Israel - Ben Gurion Int. (TLV)"
    },
    {
        "name": "Ancona, Italy - Falconara (AOI)"
    },
    {
        "name": "Bari, Italy - Palese Macchie (BRI)"
    },
    {
        "name": "Bologna, Italy - Borgo Panigale (BLQ)"
    },
    {
        "name": "Brindisi, Italy - Brindisi P Casale (BDS)"
    },
    {
        "name": "Catania, Italy - Fontanarossa (CTA)"
    },
    {
        "name": "Florence, Italy - Peretola (FLR)"
    },
    {
        "name": "Genoa, Italy - Sestri (GOA)"
    },
    {
        "name": "Lamezia, Italy - Terme (SUF)"
    },
    {
        "name": "Milan, Italy - Linate (LIN)"
    },
    {
        "name": "Milan, Italy - Malpensa Int. (MXP)"
    },
    {
        "name": "Naples, Italy - Capodichino (NAP)"
    },
    {
        "name": "Palermo, Italy - Punta Raisi (PMO)"
    },
    {
        "name": "Pisa, Italy - San Giusto (PSA)"
    },
    {
        "name": "Reggio Calabria, Italy - Reggio Calabria (REG)"
    },
    {
        "name": "Rome, Italy - Ciampino (CIA)"
    },
    {
        "name": "Rome, Italy - Fiumicino (FCO)"
    },
    {
        "name": "Torino, Italy - Caselle (TRN)"
    },
    {
        "name": "Trieste, Italy - Ronchi Dei Legionari (TRS)"
    },
    {
        "name": "Venice, Italy - Tessera (VCE)"
    },
    {
        "name": "Abidjan, Ivory Coast - Felix Houphouet-Boigny (ABJ)"
    },
    {
        "name": "Kingston, Jamaica - Norman Manley Int. (KIN)"
    },
    {
        "name": "Montego Bay, Jamaica - Sangster Int. (MBJ)"
    },
    {
        "name": "Akita, Japan - Akita (AXT)"
    },
    {
        "name": "Aomori, Japan - Aomori (AOJ)"
    },
    {
        "name": "Asahikawa, Japan - Asahikawa (AKJ)"
    },
    {
        "name": "Fukuoka, Japan - Fukuoka (FUK)"
    },
    {
        "name": "Fukushima, Japan - Fukushima (FKS)"
    },
    {
        "name": "Hakodate, Japan - Hakodate (HKD)"
    },
    {
        "name": "Hiroshima, Japan - Hiroshima (HIJ)"
    },
    {
        "name": "Kagoshima, Japan - Kagoshima (KOJ)"
    },
    {
        "name": "Nagasaki, Japan - Nagasaki (NGS)"
    },
    {
        "name": "Nagoya, Japan - Nagoya (NGO)"
    },
    {
        "name": "Niigata, Japan - Niigata (KIJ)"
    },
    {
        "name": "Oita, Japan - Oita (OIT)"
    },
    {
        "name": "Okayama, Japan - Okayama (OKJ)"
    },
    {
        "name": "Okinawa Island, Japan - Okinawa Kadena (DNA)"
    },
    {
        "name": "Osaka, Japan - Osaka Int. (ITM)"
    },
    {
        "name": "Osaka, Japan - Kansai Int. (KIX)"
    },
    {
        "name": "Sapporo, Japan - New Chitose (CTS)"
    },
    {
        "name": "Sendai, Japan - Sendai (SDJ)"
    },
    {
        "name": "Tokyo, Japan - Tokyo Int. (HND)"
    },
    {
        "name": "Tokyo, Japan - Narita Int. (NRT)"
    },
    {
        "name": "Toyama, Japan - Toyama (TOY)"
    },
    {
        "name": "Amman, Jordan - Marka Int. (ADJ)"
    },
    {
        "name": "Amman, Jordan - Queen Alia Int. (AMM)"
    },
    {
        "name": "Almaty, Kazahkstan - Almaty (ALA)"
    },
    {
        "name": "Nairobi, Kenya - Jomo Kenyatta (NBO)"
    },
    {
        "name": "Kuwait City, Kuwait - Kuwait Int. (KWI)"
    },
    {
        "name": "Vientiane, Laos - Wattay Int. (VTE)"
    },
    {
        "name": "Riga, Latvia - Riga Int. (RIX)"
    },
    {
        "name": "Beirut, Lebanon - Beirut Int. (BEY)"
    },
    {
        "name": "Luxembourg, Luxembourg - Luxembourg (LUX)"
    },
    {
        "name": "Kuala Lumpur, Malaysia - Kuala Lumpur Int. (KUL)"
    },
    {
        "name": "Penang Island, Malaysia - Penang Int. (PEN)"
    },
    {
        "name": "Bamako, Mali - Senou Int. (BKO)"
    },
    {
        "name": "Kwajalein Atoll, Marshall Islands - Kwajalein Int. (KWA)"
    },
    {
        "name": "Majuro Atoll, Marshall Islands - Marshall Islands Int. (MAJ)"
    },
    {
        "name": "Nouakchott, Mauritania - Nouakchott (NKC)"
    },
    {
        "name": "Acapulco, Mexico - Juan N Alvarez Int. (ACA)"
    },
    {
        "name": "Aguascalientes, Mexico - Jesus Teran Int. (AGU)"
    },
    {
        "name": "Bahia De Huatulco, Mexico - Huatulco Int. (HUX)"
    },
    {
        "name": "Cabo San Lucas, Mexico - Los Cabos Int. (SJD)"
    },
    {
        "name": "Cancun, Mexico - Cancun Int. (CUN)"
    },
    {
        "name": "Chetumal, Mexico - Chetumal Int. (CTM)"
    },
    {
        "name": "Chihuahua, Mexico - General Fierro Villalobos (CUU)"
    },
    {
        "name": "Ciudad Del Carmen, Mexico - Ciudad del Carmen (CME)"
    },
    {
        "name": "Ciudad Juarez, Mexico - Gonzalez Int. (CJS)"
    },
    {
        "name": "Cozumel, Mexico - Cozumel Int. (CZM)"
    },
    {
        "name": "Culiacan, Mexico - Culiacan Int. (CUL)"
    },
    {
        "name": "Durango, Mexico - Durango (DGO)"
    },
    {
        "name": "Guadalajara, Mexico - Don Miguel Hidalgo Int. (GDL)"
    },
    {
        "name": "Guerrero Negro, Mexico - Guerrero Negro (GUB)"
    },
    {
        "name": "Hermosillo, Mexico - Garcia (HMO)"
    },
    {
        "name": "La Paz, Mexico - Manuel de Leon (LAP)"
    },
    {
        "name": "Leon, Mexico - De Guanajuato Int. (BJX)"
    },
    {
        "name": "Loreto, Mexico - Loreto Int. (LTO)"
    },
    {
        "name": "Los Mochis, Mexico - Valle Del Fuerte Int. (LMM)"
    },
    {
        "name": "Manzanillo, Mexico - Playa De Oro Int. (ZLO)"
    },
    {
        "name": "Mazatlan, Mexico - Mazatlan Int. (MZT)"
    },
    {
        "name": "Merida, Mexico - Licenciado Manuel Int. (MID)"
    },
    {
        "name": "Mexicali, Mexico - Toboada Int. (MXL)"
    },
    {
        "name": "Mexico City, Mexico - Benito Juarez Int. (MEX)"
    },
    {
        "name": "Minatitlan, Mexico - Minitatlan (MTT)"
    },
    {
        "name": "Monclova, Mexico - Monclova Int. (LOV)"
    },
    {
        "name": "Monterrey, Mexico - Monterrey Int. (MTY)"
    },
    {
        "name": "Monterrey, Mexico - Del Norte Int. (NTR)"
    },
    {
        "name": "Morelia, Mexico - Mujica Int. (MLM)"
    },
    {
        "name": "Oaxaca, Mexico - Xoxocotlan Int. (OAX)"
    },
    {
        "name": "Puebla, Mexico - Hermanos Serdan Int. (PBC)"
    },
    {
        "name": "Puerto Escondido, Mexico - Puerto Escondido (PXM)"
    },
    {
        "name": "Puerto Vallarta, Mexico - Lic Gustavo Diaz Ordaz Int. Air (PVR)"
    },
    {
        "name": "Queretaro, Mexico - Ingeniero Int. (QRO)"
    },
    {
        "name": "Saltillo, Mexico - Plan De Guadalupe Int. (SLW)"
    },
    {
        "name": "San Luis Potosi, Mexico - Ponciano Arriaga Int. (SLP)"
    },
    {
        "name": "Tampico, Mexico - Tampico (TAM)"
    },
    {
        "name": "Tapachula, Mexico - Tapachula Int. (TAP)"
    },
    {
        "name": "Tijuana, Mexico - Rodriguez Int. (TIJ)"
    },
    {
        "name": "Toluca, Mexico - Toluca Int. (TLC)"
    },
    {
        "name": "Torreon, Mexico - Torreon Int. (TRC)"
    },
    {
        "name": "Tuxtla Gutierrez, Mexico - Francisco Sarabia (TGZ)"
    },
    {
        "name": "Veracruz, Mexico - Veracruz Int. (VER)"
    },
    {
        "name": "Villahermosa, Mexico - Carlos Rovirosa Int. (VSA)"
    },
    {
        "name": "Zacatecas, Mexico - Ruiz Int. (ZCL)"
    },
    {
        "name": "Zihuatanejo, Mexico - Ixtapa-Zihuatanejo Int. (ZIH)"
    },
    {
        "name": "Babelthuap Island, Micronesia - Babelthuap/Koror (ROR)"
    },
    {
        "name": "Kosrae, Micronesia - Kosrae Island (KSA)"
    },
    {
        "name": "Pohnpei Island, Micronesia - Pohnpei Int. (PNI)"
    },
    {
        "name": "Truk, Micronesia - Truk (TKK)"
    },
    {
        "name": "Yap Island, Micronesia - Yap Int. (YAP)"
    },
    {
        "name": "Agadir, Morocco - Al-Massira (AGA)"
    },
    {
        "name": "Casablanca, Morocco - Mohammed V Int. (CMN)"
    },
    {
        "name": "Marrakech, Morocco - Menara (RAK)"
    },
    {
        "name": "Rabat, Morocco - Sale (RBA)"
    },
    {
        "name": "Tangier, Morocco - Ibn Batouta (TNG)"
    },
    {
        "name": "Windhoek, Namibia - Hosea Kutako Int. (WDH)"
    },
    {
        "name": "Amsterdam, Netherlands - Schipol (AMS)"
    },
    {
        "name": "Maastricht, Netherlands - Maastricht-Aachen (MST)"
    },
    {
        "name": "Bonaire Island, Netherlands Antilles - Flamingo (BON)"
    },
    {
        "name": "Curacao Island, Netherlands Antilles - Hato Int. (CUR)"
    },
    {
        "name": "Saint Maarten, Netherlands Antilles - Princess Juliana Int. (SXM)"
    },
    {
        "name": "Auckland, New Zealand - Auckland Int. (AKL)"
    },
    {
        "name": "Christchurch, New Zealand - Christchurch Int. (CHC)"
    },
    {
        "name": "Dunedin, New Zealand - Dunedin (DUD)"
    },
    {
        "name": "Queenstown, New Zealand - Queenstown (ZQN)"
    },
    {
        "name": "Wellington, New Zealand - Wellington Int. (WLG)"
    },
    {
        "name": "Managua, Nicaragua - Managua Int. (MGA)"
    },
    {
        "name": "Niamey, Niger - Diori Hamani (NIM)"
    },
    {
        "name": "Abuja, Nigeria - Nnamdi Azikiwe (ABV)"
    },
    {
        "name": "Kano, Nigeria - Mallam Aminu Kano (KAN)"
    },
    {
        "name": "Lagos, Nigeria - Lagos Int. (LOS)"
    },
    {
        "name": "Port Harcourt, Nigeria - Port Harcourt (PHC)"
    },
    {
        "name": "Rota Island, Northern Marianas - Rota Island Int. (ROP)"
    },
    {
        "name": "Saipan Island, Northern Marianas - Saipan Int. (SPN)"
    },
    {
        "name": "Bergen, Norway - Flesland (BGO)"
    },
    {
        "name": "Oslo,  Gardermoen - Oslo  (OSL)"
    },
    {
        "name": "Stavanger, Norway - Sola (SVG)"
    },
    {
        "name": "Torp, Norway - Sandefjord (TRF)"
    },
    {
        "name": "Trondheim, Norway - Trondheim (TRD)"
    },
    {
        "name": "Muscat, Oman - Seeb Int. (MCT)"
    },
    {
        "name": "Islamabad, Pakistan - Islamabad Int. (ISB)"
    },
    {
        "name": "Karachi, Pakistan - Quaid-E-Azam Int. (KHI)"
    },
    {
        "name": "Lahore, Pakistan - Lahore Int. (LHE)"
    },
    {
        "name": "Panama City, Panama - Panama City (PFN)"
    },
    {
        "name": "Panama City, Panama - Tocumen Int. (PTY)"
    },
    {
        "name": "Lima, Peru - Jorge Chavez Int. (LIM)"
    },
    {
        "name": "Manila, Philippines - Ninoy Aquino Int. (MNL)"
    },
    {
        "name": "Krakow, Poland - John Paul II Balice Int. (KRK)"
    },
    {
        "name": "Warsaw, Poland - Okecie Int. (WAW)"
    },
    {
        "name": "Lisbon, Portugal - Lisbon Int. (LIS)"
    },
    {
        "name": "Oporto, Portugal - Francisco Sa Carneiro (OPO)"
    },
    {
        "name": "Aguadilla, Puerto Rico - Rafael Hernandez (BQN)"
    },
    {
        "name": "Mayaguez, Puerto Rico - Eugenio Maria De Hostos (MAZ)"
    },
    {
        "name": "Ponce, Puerto Rico - Mercedita (PSE)"
    },
    {
        "name": "San Juan, Puerto Rico - Luiz Munoz Marin Int. (SJU)"
    },
    {
        "name": "Vieques, Puerto Rico - Antonio Rivera Rodriguez (VQS)"
    },
    {
        "name": "Doha, Qatar - Doha Int. (DOH)"
    },
    {
        "name": "Bucharest, Romania - Otopeni Int. (OTP)"
    },
    {
        "name": "Satu Mare, Romania - Satu Mare Int. (SUJ)"
    },
    {
        "name": "Timisoara, Romania - Timisoara (TSR)"
    },
    {
        "name": "Moscow, Russia - Domodedovo (DME)"
    },
    {
        "name": "Moscow, Russia - Sheremetyevo Int. (SVO)"
    },
    {
        "name": "Saint Petersburg, Russia - Pulkovo Int. (LED)"
    },
    {
        "name": "Nevis Island, Saint Kitts and Nevis - Newcastle (NEV)"
    },
    {
        "name": "St Kitts Island, Saint Kitts and Nevis - Robert Bradshaw Int. (SKB)"
    },
    {
        "name": "Castries, Saint Lucia - Vigie (SLU)"
    },
    {
        "name": "Saint Lucia, Saint Lucia - Hewanorra Int. (UVF)"
    },
    {
        "name": "Canouan Island, Saint Vincent - Canouan Island (CIW)"
    },
    {
        "name": "Dammam, Saudi Arabia - King Fahad Int. (DMM)"
    },
    {
        "name": "Jeddah, Saudi Arabia - King Abdulaziz Int. (JED)"
    },
    {
        "name": "Riyadh, Saudi Arabia - King Khaled Int. (RUH)"
    },
    {
        "name": "Dakar, Senegal - Dakar - Yoff Int. (DKR)"
    },
    {
        "name": "Belgrade, Serbia - Belgrade (BEG)"
    },
    {
        "name": "Singapore, Singapore - Changi Int. (SIN)"
    },
    {
        "name": "Bratislava, Slovakia - M R Stefanik (BTS)"
    },
    {
        "name": "Kosice, Slovakia - Kosice (KSC)"
    },
    {
        "name": "Capetown, South Africa - Capetown Int. (CPT)"
    },
    {
        "name": "Durban, South Africa - Durban Int. (DUR)"
    },
    {
        "name": "East London, South Africa - East London (ELS)"
    },
    {
        "name": "George, South Africa - George (GRJ)"
    },
    {
        "name": "Johannesburg, South Africa - Johannesburg Int. (JNB)"
    },
    {
        "name": "Port Elizabeth, South Africa - Port Elizabeth (PLZ)"
    },
    {
        "name": "Pusan, South Korea - Kimhae Int. (PUS)"
    },
    {
        "name": "Seoul, South Korea - Gimpo (GMP)"
    },
    {
        "name": "Seoul, South Korea - Incheon Int. (ICN)"
    },
    {
        "name": "Alicante, Spain - Alicante (ALC)"
    },
    {
        "name": "Barcelona, Spain - Barcelona (BCN)"
    },
    {
        "name": "Bilbao, Spain - Bilbao (BIO)"
    },
    {
        "name": "La Palma, Spain - La Palma (SPC)"
    },
    {
        "name": "Madrid, Spain - Barajas Int. (MAD)"
    },
    {
        "name": "Madrid, Spain - Torrejon (TOJ)"
    },
    {
        "name": "Malaga, Spain - Malaga Int. (AGP)"
    },
    {
        "name": "Palma De Mallorca, Spain - Palma De Mallorca (PMI)"
    },
    {
        "name": "Tenerife-North, Spain - Los Rodeos (TFN)"
    },
    {
        "name": "Goteborg, Sweden - Landvetter (GOT)"
    },
    {
        "name": "Stockholm, Sweden - Arlanda Int. (ARN)"
    },
    {
        "name": "Basel, Switzerland - Basel Int. (BSL)"
    },
    {
        "name": "Geneva, Switzerland - Cointrin Int. (GVA)"
    },
    {
        "name": "Zurich, Switzerland - Zurich Int. (ZRH)"
    },
    {
        "name": "Aleppo, Syria - Aleppo Int. (ALP)"
    },
    {
        "name": "Damascus, Syria - Damascus Int. (DAM)"
    },
    {
        "name": "Kaohsiung, Taiwan - Kaohsiung Int. (KHH)"
    },
    {
        "name": "Taipei, Taiwan - Chiang Kai-Shek Int. (TPE)"
    },
    {
        "name": "Dar-Es-Salaam, Tanzania - Dar-Es-Salaam Int. (DAR)"
    },
    {
        "name": "Kilimanjaro, Tanzania - Kilimanjaro Int. (JRO)"
    },
    {
        "name": "Bangkok, Thailand - Don Muang Int. (BKK)"
    },
    {
        "name": "Lome, Togo - Tokoin (LFW)"
    },
    {
        "name": "Port Of Spain, Trinidad and Tobago - Piarco Int. (POS)"
    },
    {
        "name": "Tunis, Tunisia - Carthage (TUN)"
    },
    {
        "name": "Istanbul, Turkey - Ataturk Int. (IST)"
    },
    {
        "name": "Providenciales, Turks and Caicos - Providenciales Int. (PLS)"
    },
    {
        "name": "Entebbe, Uganda - Entebbe Int. (EBB)"
    },
    {
        "name": "Beef Island, UK Virgin Islands - Beef Island Int. (EIS)"
    },
    {
        "name": "Kiev, Ukraine - Zhulyany Int. (IEV)"
    },
    {
        "name": "Kiev, Ukraine - Borispol (KBP)"
    },
    {
        "name": "Abu Dhabi, United Arab Emirates - Abu Dhabi Int. (AUH)"
    },
    {
        "name": "Dubai, United Arab Emirates - Dubai Int. (DXB)"
    },
    {
        "name": "Aberdeen, United Kingdom - Dyce (ABZ)"
    },
    {
        "name": "Belfast, United Kingdom - Belfast Int. (BFS)"
    },
    {
        "name": "Belfast, United Kingdom - Belfast City (BHD)"
    },
    {
        "name": "Birmingham, United Kingdom - Birmingham Int. (BHX)"
    },
    {
        "name": "Bristol, United Kingdom - Bristol (BRS)"
    },
    {
        "name": "Cardiff, United Kingdom - Cardiff (CWL)"
    },
    {
        "name": "Edinburgh, United Kingdom - Edinburgh (EDI)"
    },
    {
        "name": "Glasgow, United Kingdom - Glasgow Int. (GLA)"
    },
    {
        "name": "Guernsey, United Kingdom - Guernsey (GCI)"
    },
    {
        "name": "Humberside, United Kingdom - Humberside (HUY)"
    },
    {
        "name": "Inverness, United Kingdom - Inverness (INV)"
    },
    {
        "name": "Jersey, United Kingdom - Jersey (JER)"
    },
    {
        "name": "Leeds Bradford, United Kingdom - Leeds Bradford (LBA)"
    },
    {
        "name": "London, United Kingdom - London City (LCY)"
    },
    {
        "name": "London, United Kingdom - London Gatwick (LGW)"
    },
    {
        "name": "London, United Kingdom - London Heathrow (LHR)"
    },
    {
        "name": "London, United Kingdom - Stansted (STN)"
    },
    {
        "name": "Manchester, United Kingdom - Manchester Int. (MAN)"
    },
    {
        "name": "Newcastle, United Kingdom - Newcastle (NCL)"
    },
    {
        "name": "Norwich, United Kingdom - Norwich (NWI)"
    },
    {
        "name": "Southampton, United Kingdom - Southampton Int. (SOU)"
    },
    {
        "name": "Teesside, United Kingdom - Durham Tees Valley (MME)"
    },
    {
        "name": "Montevideo, Uruguay - Carrasco Int. (MVD)"
    },
    {
        "name": "Saint Croix, US Virgin Islands - Henry E Rohlsen (STX)"
    },
    {
        "name": "Saint Thomas, US Virgin Islands - Cyril E King Int. (STT)"
    },
    {
        "name": "Tashkent, Uzbekistan - Vostochny Int. (TAS)"
    },
    {
        "name": "Caracas, Venezuela - Simon Bolivar Int. (CCS)"
    },
    {
        "name": "Maracaibo, Venezuela - La Chinita Int. (MAR)"
    },
    {
        "name": "Hanoi, Vietnam - Noibai Int. (HAN)"
    },
    {
        "name": "Ho Chi Minh City, Vietnam - Tansonnhat (SGN)"
    },
    {
        "name": "Apia, Western Samoa - Faleolo Int. (APW)"
    },
    {
        "name": "Lusaka, Zambia - Lusaka Int. (LUN)"
    }
];

export { cities };