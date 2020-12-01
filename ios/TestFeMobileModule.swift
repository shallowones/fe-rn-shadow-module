@objc(TestFeMobileModule)
class TestFeMobileModule: NSObject {
    private let DURATION_SHORT_KEY: String = "SHORT";
    private let DURATION_LONG_KEY: String = "LONG";
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc(sampleMethodWithCallback:secondArgument:withCallback:)
    func sampleMethodWithCallback(stringArgument: String, numberArgument: Float, callback: RCTResponseSenderBlock) {
        callback(["Received numberArgument: " + String(describing: numberArgument) + " stringArgument: " + stringArgument])
    }
    
    @objc(sampleMethodWithPromise:secondArgument:withResolver:withRejecter:)
    func sampleMethodWithPromise(stringArgument: String, numberArgument: Float, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        resolve("Received numberArgument: " + String(describing: numberArgument) + " stringArgument: " + stringArgument)
    }
    
    @objc
    func constantsToExport() -> [String : Int]! {
        return [
            self.DURATION_SHORT_KEY: 0,
            self.DURATION_LONG_KEY: 1,
        ]
    }
    
    @objc(showText:secondArgument:)
    func showText(message: String, duration: Int) {
        if let topController = UIApplication.shared.keyWindow?.rootViewController {
            let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
            alert.view.backgroundColor = UIColor.black
            alert.view.alpha = 0.6
            alert.view.layer.cornerRadius = 15
            
            let map = self.constantsToExport()
            let durationValue = duration == map![self.DURATION_LONG_KEY] ? 3000 : 1000
            
            DispatchQueue.main.async {
                topController.present(alert, animated: true)
            }
            
            DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(durationValue)) {
                alert.dismiss(animated: true)
            }
        }
    }
    
    @objc(getTextLength:withResolver:withRejecter:)
    func getTextLength(message: NSString, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        resolve(message.length)
    }
}
