package com.bookstore.util;

import org.junit.Assert;
import org.junit.Test;

public class TextUtilTest {

    @Test
    public void shouldSanitize() {
        Assert.assertEquals("lorem ipsum dolor sit.", new TextUtil().sanitize("lorem  ipsum   dolor \n sit."));
        Assert.assertEquals("lorem ipsum dolor sit.", new TextUtil().sanitize("lorem ipsum dolor sit."));
        Assert.assertEquals("lorem ipsum dolor sit.", new TextUtil().sanitize("lorem ipsum dolor  sit."));
    }
}
