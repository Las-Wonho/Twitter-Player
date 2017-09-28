const electron = require('electron');
const {app} = electron;
const {pathEnv} = require('./sokcuri');
const fs = require('fs');
const path = require('path');

module.exports = {
    
    // 설정파일 로드
    _filePath: pathEnv.userDataPath + '/config.json',
    _defaultConfig: {
        viewPageType: 'web'
    },
    data: {},
    load() {
        const config = this._defaultConfig;
        let userConfig;
        const fc = fs.constants; // shortcut
        try {
            fs.accessSync(this._filePath, (fc.F_OK | fc.R_OK | fc.W_OK));
            userConfig = JSON.parse(fs.readFileSync(this._filePath, 'utf8'));
        } catch (e) {
            userConfig = {};
        }
        Object.assign(config, userConfig);

        this.data = config;
        return config;
    },
    // 설정파일 저장
    save() {
        const jsonStr = JSON.stringify(this.data, null, 2);
        fs.writeFileSync(this._filePath, jsonStr, 'utf8');
    },
};