const qiniu = require('qiniu')
const hostname = 'http:/hupu.jackjam.xyz';
const accessKey = 'vGlCmus7RxBcgECb_4KmI747ctxeOqmOrLJvRJ9Q';
const secretKey = 'PGmX0c4Ny79L1tuynfmlB9xRhNCtpFqvFjn1AD--';

const freshFile = (urlsToRefresh) => {
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var cdnManager = new qiniu.cdn.CdnManager(mac);
    //刷新链接，单次请求链接不可以超过100个，如果超过，请分批发送请求
    cdnManager.refreshUrls(urlsToRefresh, function (err, respBody, respInfo) {
        if (err) {
            throw err;
        }
        console.log(respInfo.statusCode);
        if (respInfo.statusCode == 200) {
            var jsonBody = JSON.parse(respBody);
            console.log("刷新成功");
        }
    });
}

const uploadFile = (localFile, key, overwrite) => {
    return new Promise((resolve, reject) => {
        const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        const options = {
            scope: overwrite ? `hupu:${key}` : 'hupu',
        };
        const config = new qiniu.conf.Config();
        // 空间对应的机房
        config.zone = qiniu.zone.Zone_z2;
        const putPolicy = new qiniu.rs.PutPolicy(options);
        const uploadToken = putPolicy.uploadToken(mac);
        const formUploader = new qiniu.form_up.FormUploader(config);
        const putExtra = new qiniu.form_up.PutExtra();
        // 文件上传
        formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
            respBody, respInfo) {
            if (respErr) {
                reject(respErr);
            }
            if (respInfo.statusCode == 200) {
                resolve(respBody);
            } else {
                reject(respBody);
            }
        });
    })
}

const glob = pattern => {
    const _glob = require('glob');
    return new Promise((resolve, reject) => {
        _glob(pattern, function (err, files) {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}

const fileToOverwrite = 'index.html'
const uploadDir = async (dirPath, cdnPath) => {
    dirPath = dirPath.endsWith('/') ? dirPath : dirPath + '/';
    cdnPath = cdnPath || ''
    const files = await glob(`${dirPath}**/*.*`)
    await Promise.all(files.map(async (file) => {
        try {
            const fileName = file.replace(dirPath, '');
            const key = `${cdnPath}${fileName}`;
            await uploadFile(file, key, fileName === fileToOverwrite);
            console.log(fileName + ' =========> ' + hostname + key)
            if(fileName === fileToOverwrite) {
                freshFile([
                    hostname,
                    hostname + key
                ])
            }
        } catch (err) {
        }
    }))
}

const gulp = require('gulp')

gulp.task('upload', async () => {
  await uploadDir('./dist', '')
})