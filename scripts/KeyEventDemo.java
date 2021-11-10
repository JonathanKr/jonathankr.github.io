import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.*;

import javax.security.sasl.RealmCallback;
import javax.sound.midi.SysexMessage;
import javax.swing.*;

import java.util.Timer;
import java.util.TimerTask;

public class KeyEventDemo extends JFrame implements KeyListener {
    JTextArea displayArea;
    boolean isPressing = false;
    boolean firstPress = false;

    long pressBegin;

    int timeunit = 500;

    BinaryTree<String> morseDict = binaryTreeDict();

    int releaseTime = 0;
    Timer checkReleaseTimer;

    boolean isLastDot = true;

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }

    private void createTimer() {
        checkReleaseTimer = new Timer();

        checkReleaseTimer.schedule(new TimerTask() {
            @Override
            public void run() {
                releaseTime += timeunit / 10;
                System.out.println(releaseTime);
                if (releaseTime >= 7 * timeunit) {
                    if (!isLastDot) {
                        releaseTime = 0;
                        displayArea.setText(displayArea.getText() + morseDict.getContent() + ". ");
                        morseDict = binaryTreeDict();
                        isLastDot = true;
                    }
                }
            }

        }, timeunit / 10, timeunit / 10);
    }

    private static void createAndShowGUI() {
        // Create and set up the window.
        KeyEventDemo frame = new KeyEventDemo("Morse Code");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Set up the content pane.
        frame.addComponentsToPane();

        // Display the window.
        frame.pack();
        frame.setVisible(true);
    }

    private void addComponentsToPane() {
        displayArea = new JTextArea();
        displayArea.setEditable(false);
        displayArea.addKeyListener(this);
        displayArea.setFont(displayArea.getFont().deriveFont(64.0f));
        JScrollPane scrollPane = new JScrollPane(displayArea);
        scrollPane.setPreferredSize(new Dimension(375, 125));

        getContentPane().add(scrollPane, BorderLayout.CENTER);
    }

    public KeyEventDemo(String name) {
        super(name);
        createTimer();
    }

    public void keyTyped(KeyEvent e) {

    }

    public void keyPressed(KeyEvent e) {
        if (!isPressing) {
            // start counting key-press-time
            pressBegin = System.currentTimeMillis();

            if (releaseTime >= timeunit && releaseTime < 3 * timeunit) {
                if (firstPress) {
                    displayArea.setText(displayArea.getText() + morseDict.getContent());

                    morseDict = binaryTreeDict();
                    isLastDot = false;
                }
            } else if (releaseTime >= 3 * timeunit && releaseTime < 7 * timeunit) {
                if (firstPress) {
                    displayArea.setText(displayArea.getText() + morseDict.getContent() + " ");

                    morseDict = binaryTreeDict();
                    isLastDot = false;
                }
            }
        }

        // button is beeing pressed
        isPressing = true;

        // detect first key press
        if (!firstPress) {
            firstPress = true;
        }
    }

    public void keyReleased(KeyEvent e) {
        isPressing = false;

        long milliSec = System.currentTimeMillis() - pressBegin;

        if (milliSec <= timeunit) {
            System.out.println("dot");
            morseDict = morseDict.getLeftTree();
        } else if (milliSec > timeunit) {
            System.out.println("dash");
            morseDict = morseDict.getRightTree();
        }

        releaseTime = 0;
    }

    public BinaryTree<String> binaryTreeDict() {
        BinaryTree<String> h = new BinaryTree<String>("H");
        BinaryTree<String> v = new BinaryTree<String>("V");
        BinaryTree<String> f = new BinaryTree<String>("F");
        BinaryTree<String> ue = new BinaryTree<String>("Ü");
        BinaryTree<String> l = new BinaryTree<String>("L");
        BinaryTree<String> ae = new BinaryTree<String>("Ä");
        BinaryTree<String> p = new BinaryTree<String>("P");
        BinaryTree<String> j = new BinaryTree<String>("J");
        BinaryTree<String> b = new BinaryTree<String>("B");
        BinaryTree<String> x = new BinaryTree<String>("X");
        BinaryTree<String> c = new BinaryTree<String>("C");
        BinaryTree<String> y = new BinaryTree<String>("Y");
        BinaryTree<String> z = new BinaryTree<String>("Z");
        BinaryTree<String> q = new BinaryTree<String>("Q");
        BinaryTree<String> oe = new BinaryTree<String>("Ö");
        BinaryTree<String> ch = new BinaryTree<String>("CH");

        BinaryTree<String> s = new BinaryTree<String>("S", h, v);
        BinaryTree<String> u = new BinaryTree<String>("U", f, ue);
        BinaryTree<String> r = new BinaryTree<String>("R", l, ae);
        BinaryTree<String> w = new BinaryTree<String>("W", p, j);
        BinaryTree<String> d = new BinaryTree<String>("D", b, x);
        BinaryTree<String> k = new BinaryTree<String>("K", c, y);
        BinaryTree<String> g = new BinaryTree<String>("G", z, q);
        BinaryTree<String> o = new BinaryTree<String>("O", oe, ch);

        BinaryTree<String> i = new BinaryTree<String>("I", s, u);
        BinaryTree<String> a = new BinaryTree<String>("A", r, w);
        BinaryTree<String> n = new BinaryTree<String>("N", d, k);
        BinaryTree<String> m = new BinaryTree<String>("M", g, o);

        BinaryTree<String> e = new BinaryTree<String>("E", i, a);
        BinaryTree<String> t = new BinaryTree<String>("T", n, m);

        return new BinaryTree<String>("Dictionary", e, t);
    }
}