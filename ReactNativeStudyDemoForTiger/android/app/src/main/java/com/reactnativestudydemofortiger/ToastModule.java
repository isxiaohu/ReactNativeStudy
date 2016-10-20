package com.reactnativestudydemofortiger;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by guohu on 16/10/20.
 */
public class ToastModule extends ReactContextBaseJavaModule{
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void measureLayout(int tag, int ancestorTag, Callback errorCallback, Callback successCallback) {
        try {
//            measureLayout(tag, ancestorTag, errorCallback,successCallback);
//            float relativeX = PixelUtil.toDIPFromPixel(20);
//            float relativeY = PixelUtil.toDIPFromPixel(30);
//            float width = PixelUtil.toDIPFromPixel(40);
//            float height = PixelUtil.toDIPFromPixel(50);
            successCallback.invoke(20, 30, 90, 20);
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    @Override
    public String getName() {
        return "ToastTigerAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }
}
