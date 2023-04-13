export class DownloadHandlerFileHooker {

    static hook() {

        let local_GetText = Il2Cpp.Api.DownloadHandlerFile._GetText
        if (local_GetText) {
            A(local_GetText, undefined, (ret) => {
                LOGD(`[*] DownloadHandlerFile.GetText() | ret = '${readU16(ret)}'`)
            })
        }

        let local_GetData = Il2Cpp.Api.DownloadHandlerFile._GetData
        if (local_GetData) {
            A(local_GetData, undefined, (ret) => {
                LOGD(`[*] DownloadHandlerFile.GetData() | ret = '${ret}'`)
            })
        }

    }

}