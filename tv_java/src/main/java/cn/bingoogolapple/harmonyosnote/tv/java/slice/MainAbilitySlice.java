package cn.bingoogolapple.harmonyosnote.tv.java.slice;

import cn.bingoogolapple.harmonyosnote.tv.java.data.ListHolder;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;

public class MainAbilitySlice extends AbilitySlice {
    private ListHolder listHolder;

    @Override
    public void onStart(Intent intent) {
        listHolder = new ListHolder(this);
        setUIContent(listHolder.createComponent());
    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }
}
