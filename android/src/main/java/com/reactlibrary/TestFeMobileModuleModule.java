package com.reactlibrary;

import android.view.Gravity;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.module.annotations.ReactModule;

import java.util.HashMap;
import java.util.Map;

@ReactModule(name = TestFeMobileModuleModule.NAME)
public class TestFeMobileModuleModule extends ReactContextBaseJavaModule {
    public static final String NAME = "TestFeMobileModule";

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    @Nullable
    private Toast showedMessage;

    public TestFeMobileModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void sampleMethodWithCallback(String stringArgument, int numberArgument, Callback callback) {
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void sampleMethodWithPromise(String stringArgument, int numberArgument, Promise promise) {
        promise.resolve("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void showText(String message, int duration) {
        if (showedMessage != null) {
            showedMessage.cancel();
        }

        showedMessage = Toast.makeText(getReactApplicationContext(), message, duration);
        showedMessage.setGravity(Gravity.CENTER, 0, 0);
        showedMessage.show();
    }

    @ReactMethod
    public void getTextLength(String message, Promise promise) {
        promise.resolve(message.length());
    }
}
