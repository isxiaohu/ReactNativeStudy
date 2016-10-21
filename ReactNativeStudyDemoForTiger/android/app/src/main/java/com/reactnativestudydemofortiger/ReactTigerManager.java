package com.reactnativestudydemofortiger;

import android.graphics.Color;
import android.support.annotation.Nullable;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import static java.security.AccessController.getContext;

/**
 * Created by guohu on 16/10/21.
 */

public class ReactTigerManager extends SimpleViewManager<View> {
    View view;
    @Override
    public String getName() {
        return "TigerView";
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
        view = new View(reactContext);
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onClickEvent();
            }
        });
        return view;
    }

    //属性
    @ReactProp(name = "bg")
    public void bg(View view, @Nullable String clorString) {
        view.setBackgroundColor(Color.parseColor("#"+clorString));
    }

    //事件
    public void onClickEvent() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "哟哟，切克老");
        ReactContext reactContext = (ReactContext)view.getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                view.getId(),
                "topChange",
                event);
        System.out.println("========================yayayay");
    }
}
