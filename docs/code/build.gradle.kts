import java.util.Properties
import java.io.FileInputStream // [!code ++]

plugins {
    // ...
}

val tauriProperties = Properties().apply {
    val propFile = file("tauri.properties")
    if (propFile.exists()) {
        propFile.inputStream().use { load(it) }
    }
}

val keyPropertiesFile = rootProject.file("key.properties") // [!code ++]
val keyProperties = Properties() // [!code ++]
keyProperties.load(FileInputStream(keyPropertiesFile)) // [!code ++]

android {
    compileSdk = 34
    namespace = "cn.akjs.dev"
    defaultConfig {
        // ...
    }
    
    signingConfigs { // [!code ++]
       create("release") { // [!code ++]
           keyAlias = keyProperties["keyAlias"] as String // [!code ++]
           keyPassword = keyProperties["keyPassword"] as String // [!code ++]
           storeFile = file(keyProperties["storeFile"] as String) // [!code ++]
           storePassword = keyProperties["storePassword"] as String // [!code ++]
       } // [!code ++]
    } // [!code ++]

    buildTypes {
        getByName("debug") {
            // ...
        }
        getByName("release") {
            isMinifyEnabled = true
            signingConfig = signingConfigs.getByName("release") // [!code ++]
            proguardFiles(
                *fileTree(".") { include("**/*.pro") }
                    .plus(getDefaultProguardFile("proguard-android-optimize.txt"))
                    .toList().toTypedArray()
            )
        }
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

rust {
    rootDirRel = "../../../"
}

dependencies {
    // ...
}

apply(from = "tauri.build.gradle.kts")

