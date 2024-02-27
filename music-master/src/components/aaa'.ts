export interface RootObject {
 albumadamid:      string;
 alias:            string;
 artists:          Artist[];
 genres:           Genres;
 highlightsurls:   Highlightsurls;
 hub:              Hub;
 images:           Images;
 isrc:             string;
 key:              string;
 layout:           string;
 relatedtracksurl: string;
 releasedate:      string;
 sections:         Section[];
 share:            Share;
 subtitle:         string;
 title:            string;
 trackadamid:      string;
 type:             string;
 url:              string;
 urlparams:        Urlparams;
}

export interface Artist {
 adamid: string;
 alias:  string;
 id:     string;
}

export interface Genres {
 primary: string;
}

export interface Highlightsurls {
 artisthighlightsurl: string;
 trackhighlighturl:   string;
}

export interface Hub {
 actions:     Action[];
 displayname: string;
 explicit:    boolean;
 image:       string;
 options:     Option[];
 type:        string;
}

export interface Action {
 id?:  string;
 name: string;
 type: string;
 uri?: string;
}

export interface Option {
 actions:             Action[];
 beacondata:          OptionBeacondata;
 caption:             string;
 colouroverflowimage: boolean;
 image:               string;
 listcaption:         string;
 overflowimage:       string;
 providername:        string;
 type:                string;
}

export interface OptionBeacondata {
 providername: string;
 type:         string;
}

export interface Images {
 background: string;
 coverart:   string;
 coverarthq: string;
 joecolor:   string;
}

export interface Section {
 beacondata?: SectionBeacondata;
 footer?:     string;
 metadata?:   Metadatum[];
 metapages?:  Metapage[];
 tabname:     string;
 text?:       string[];
 type:        string;
 url?:        string;
}

export interface SectionBeacondata {
 commontrackid: string;
 lyricsid:      string;
 providername:  string;
}

export interface Metadatum {
 text:  string;
 title: string;
}

export interface Metapage {
 caption: string;
 image:   string;
}

export interface Share {
 avatar:   string;
 href:     string;
 html:     string;
 image:    string;
 snapchat: string;
 subject:  string;
 text:     string;
 twitter:  string;
}

export interface Urlparams {
 "{trackartist}": string;
 "{tracktitle}":  string;
}
