#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TestFeMobileModule, NSObject)

RCT_EXTERN_METHOD(sampleMethodWithCallback:(NSString *)stringArgument secondArgument:(NSInteger *)numberArgument withCallback:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(sampleMethodWithPromise:(NSString *)stringArgument secondArgument:(NSInteger *)numberArgument
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(showText:(NSString *)message secondArgument:(NSInteger *)duration)

RCT_EXTERN_METHOD(getTextLength:(NSString *)message withResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)

@end
